import { Button, CircularProgress, Grid } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'
import { useAppCtx } from '../../../src/contexts/store'
import { pagesStyles } from '@styles/index'
import { Formik, FormikProps } from 'formik'
import { mealStepType } from '../../../src/types/global'
import { bebidasDataFetch } from './services/services'
import axios from 'axios'
import mockMeals from './mocks/mockMeals'
import mealInitialValues from './constants/mealInitialValues'


type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const DrinksStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}) => {

  const { modeTheme, setDrinkStep, drinkStep, setStepActive, user, setModalLogin, selectedSurvey } = useAppCtx();
  const { surveyStyles: { drinks } } = pagesStyles(modeTheme);
  const [bebidas, setBebidas] = useState<Array<any>>([])

  useEffect(() => {

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const service = selectedSurvey.service
    const url = `${baseUrl}comida/servicio/${service}`
    const headers = { headers: { Authorization: `Bearer ${user.access_token}` } }

    axios.get(url, headers)
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          const data = res.data.data.bebida
          const dataComidas = data.map(async (comida: any) => {
            try {
              const info = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}comida/${comida.id}`,
                { headers: { Authorization: `Bearer ${user.access_token}` } })
              return info
            } catch (error) {
              console.log('comida data error', error);
            }
          })

          const promisesFormatted = async () => {
            try {
              const promises = await Promise.all(dataComidas)
              const res = promises.map((e) => e.data.data)
              setBebidas(res)

            } catch (error) {
              console.log('promesas catch', error)
            }
          }
          promisesFormatted()
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })

  }, [user, selectedSurvey])

  const handleBackBtn = () => {
    handleGoToPreviousStep()
    setDrinkStep(mealInitialValues)
    setStepActive(1)
  }

  return (
    <>
      {
        bebidas.length > 0
          ? (
            <Formik
              initialValues={drinkStep}
              onSubmit={(values) => {
                // console.log({values});

                setDrinkStep(values)
                setStepActive(2)
                handleGoToNextStep()

              }}
            // validationSchema={validationSchema}
            >
              {(props: FormikProps<any>) => {
                return (
                  <>
                    <form onSubmit={props.handleSubmit}>
                      <IngredientsPanel
                        formikProps={props}
                        meals={bebidas}
                      />
                      <Grid
                        container xs={12}
                        justifyContent={"space-between"}
                        sx={{ pt: 0 }}
                      >
                        <Button
                          onClick={handleBackBtn}
                          sx={drinks.button}
                        >
                          Volver
                        </Button>
                        <Button
                          sx={drinks.button}
                          type='submit'
                        >
                          Siguiente
                        </Button>
                      </Grid>
                    </form>
                  </>)
              }
              }
            </Formik>
          )
          : <CircularProgress />
      }
    </>

  )
}

export default DrinksStep