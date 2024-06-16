import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { Card, Checkbox, Grid } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MealIngredientCard from './MealIngredientCard';
import { useAppCtx } from '../../../../src/contexts/store';
import { FormikProps } from 'formik';
import { foodDataType, mealDataType } from '../../../../src/types/global';
import { pagesStyles } from '@styles/index';

type Props = {
  formikProps: FormikProps<any>;
  meals: Array<mealDataType>
}

const IngredientsPanel: React.FC<Props> = ({
  formikProps,
  meals
}) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles: { ingredientsPanel } } = pagesStyles(modeTheme);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [singleMealCheck, setSingleMealCheck] = useState<number>(0)

  const { setFieldValue, values } = formikProps

  useEffect(() => {

    if(values.alimento.length === 0){
      setSingleMealCheck(values.comida)
    }
    
  }, [values])  
  
  const checkInfoProvider = (id:number):boolean =>{
    if(id === singleMealCheck) return true
    else return false
  }

  // MUI Accordion handleChange 
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // SimpleMealCard
  const simpleMealHandleChange = (e: any, id: number, nombre: string, alimento: Array<foodDataType>) => {

    if (e.target.checked) {
      setSingleMealCheck(id)
      setFieldValue('comida', id)
      setFieldValue('nombre', nombre.toLocaleLowerCase())
      setFieldValue('alimento', [])
    }

    if (e.target.checked === false) {
      setSingleMealCheck(0)
      setFieldValue('comida', null)
      setFieldValue('nombre', '')
      setFieldValue('alimento', [])
    }
  }

  return (
    <div style={{ gap: '1rem' }}>
      {
        meals.map((meal, index) => {

          const { nombre, alimento, id } = meal

          return (
            alimento.length > 0
              ? (
                // Compound Meal Card
                <div key={`key+${nombre}`} style={{ marginBottom: '0.5rem' }}>
                  <Accordion
                    sx={ingredientsPanel.container.box}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ ml: 1.5 }}
                    >
                      <Typography sx={{ width: {xs: '70%', sm: '70%', md: '70%', lg: '33%', xl: '33%'}, flexShrink: 0 }}>
                        {nombre}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ingredientsPanel.container.details}>
                      <Grid container xs={12} justifyContent={'space-between'}>
                        {
                          alimento
                            ? alimento.map(({ nombre, foto, id }) => {
                              return (
                                <MealIngredientCard
                                  meal={meal}
                                  ingredientId={id}
                                  ingredienteName={nombre}
                                  picture={foto}
                                  formikProps={formikProps}
                                  key={`${nombre}_key`}
                                />
                              )
                            })
                            : null
                        }
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>)
              : (
                // Simple Meal Card
                <div>
                  <Grid
                    item xs={12}
                  >
                    <Card
                      sx={ingredientsPanel.simpleCard.container}
                    >
                      <Grid item>
                        <Typography sx={ingredientsPanel.simpleCard.title}>
                          {nombre}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Checkbox
                          checked={checkInfoProvider(id)}
                          sx={{ mr: 0.5, }}
                          name={nombre}
                          onClick={(e) => simpleMealHandleChange(e, id, nombre, alimento)}
                        />
                      </Grid>
                    </Card>
                  </Grid>
                </div>
              )
          )
        })
      }
    </div>
  );
}


export default IngredientsPanel