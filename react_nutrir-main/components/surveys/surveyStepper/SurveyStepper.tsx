import { FC } from "react";
import { useRouter } from "next/router";
import { useAppCtx } from "../../../src/contexts/store";
import moment from "moment";
import { Card, CardContent, Grid, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import stepsProvider from "./utils/stepsProvider";
import mealDescriptionFormatter from "./utils/mealDescriptionFormatter";
import guestsDescriptionFormatter from "./utils/guestsDescriptionFormatter";
import submitContentFormatter from "./utils/submitContentFormatter";
import { surveyPost } from "../services";
import { mealInit } from "../../../src/contexts/constants/initInfo";
import { pagesStyles } from "@styles/index";

type Props = {
  backClickHandler: () => void
}

const SurveyStepper: FC<Props> = ({
  backClickHandler
}) => {
  const route = useRouter()
  const { modeTheme } = useAppCtx();
  const { surveyStyles: { stepper } } = pagesStyles(modeTheme);

  const { user, comedorSeleccionado, selectedSurvey, guestsAmount, drinkStep, simpleMainMealStep, entryStep, compoundMainMealStep, dessertStep, displaySideStepper, setDisplaySideStepper, stepActive } = useAppCtx()

  const { setSelectedSurvey, setGuestsAmount, setDrinkStep, setSimpleMainMealStep, setEntryStep, setCompoundMainMailStep, setDessertStep, setStepActive } = useAppCtx()

  const serviceDescription = selectedSurvey?.service ? selectedSurvey?.service : ''
  const guestsDescription = guestsDescriptionFormatter(guestsAmount)
  const drinksDecription = mealDescriptionFormatter(drinkStep)
  const simpleMainMealDescription = mealDescriptionFormatter(simpleMainMealStep)
  const entryDescription = mealDescriptionFormatter(entryStep)
  const compoundMainMealDescription = mealDescriptionFormatter(compoundMainMealStep)
  const dessertDescription = mealDescriptionFormatter(dessertStep)

  const steps = stepsProvider(serviceDescription, guestsDescription, drinksDecription, simpleMainMealDescription, entryDescription, compoundMainMealDescription, dessertDescription)

  const handlerBackClick = (e: any) => {
    e.preventDefault()
    backClickHandler()
    setDisplaySideStepper(true)
  }

  const handlerSubmit = (e: any) => {
    e.preventDefault()

    const data = submitContentFormatter(user, comedorSeleccionado, selectedSurvey, guestsAmount, drinkStep, simpleMainMealStep, entryStep, compoundMainMealStep, dessertStep)

    surveyPost(data , user.access_token)
      .then(res => {
        alert('Encuesta enviada correctamente')
        route.push('/')
        setSelectedSurvey({ date: '', service: '' })
        setGuestsAmount({
          childs: 0,
          kids: 0,
          teens: 0,
          adults: 0
        })
        setDrinkStep(mealInit)
        setSimpleMainMealStep(mealInit)
        setEntryStep(mealInit)
        setCompoundMainMailStep(mealInit)
        setDessertStep(mealInit)
        setDisplaySideStepper(true)
      })
      .catch(err => {
        alert('La encuesta no pudo ser enviada')
      })
  }
  return (
    <>
      <Grid
        item
        xs={12}
        alignContent={'center'}
        justifyContent={'center'}
        sx={stepper.container}
      >
        <Card sx={stepper.card}>
          <CardContent>
            <Typography variant="h1" sx={stepper.title}>Resumen de la encuesta</Typography>
            {/* <Typography variant="h1" sx={stepper.subtitle}>{moment(selectedSurvey?.date).format('LL')}</Typography> */}
            <Typography variant="h1" sx={stepper.subtitle}>{selectedSurvey?.date}</Typography>


            <Box sx={{ maxWidth: 400 }}>
              <Stepper activeStep={stepActive} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label} expanded={true} >
                    <StepLabel >
                      <b>{step.label}</b>
                    </StepLabel>
                    <StepContent sx={{ textTransform: 'capitalize' }}>
                      <Typography>{step.description}</Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {
              displaySideStepper === false
                ? (
                  <>
                    <Grid container justifyContent={'space-between'} sx={{ mt: 2 }}>
                      <Button
                        sx={stepper.buttons}
                        onClick={handlerBackClick}
                      >
                        Volver
                      </Button>
                      <Button
                        onClick={handlerSubmit}
                        sx={stepper.buttons}
                      >
                        Enviar
                      </Button>
                    </Grid>
                  </>
                )
                : null
            }
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SurveyStepper