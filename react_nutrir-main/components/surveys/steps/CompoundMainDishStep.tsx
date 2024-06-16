import { Button, CircularProgress, Grid } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'
import { useAppCtx } from '../../../src/contexts/store'
import { pagesStyles } from '@styles/index'
import { mealStepType } from '../../../src/types/global'
import { Formik, FormikProps } from 'formik'
import axios from 'axios'
import mealInitialValues from './constants/mealInitialValues'


type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const CompoundMainDishStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}) => {

  const { modeTheme, setStepActive, setCompoundMainMailStep, user, setModalLogin, selectedSurvey, compoundMainMealStep } = useAppCtx();
  const { surveyStyles: { mealStep } } = pagesStyles(modeTheme);
  const [comidas, setComidas] = useState<Array<any>>([])

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
          const data = res.data.data["plato principal"]
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
              setComidas(res)
            } catch (error) {
              console.log('promesas catch', error)
            }
          }
          promisesFormatted()

          // setComidas(dataComidas)
        }
      })
      .catch(err => {
        // console.log('err', err.response)
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })
  }, [user.access_token, selectedSurvey])

  const handleBackBtn = () => {
    handleGoToPreviousStep()
    setCompoundMainMailStep(mealInitialValues)
    setStepActive(3)
  }

  return (
    <>
      {
        comidas.length > 0
          ? (
            <Formik
              initialValues={compoundMainMealStep}
              onSubmit={(values) => {
                setCompoundMainMailStep(values)
                setStepActive(4)
                handleGoToNextStep()
              }}
            >
              {(props: FormikProps<any>) => {
                return (
                  <>
                    <form onSubmit={props.handleSubmit}>
                      <IngredientsPanel
                        formikProps={props}
                        meals={comidas}
                      />
                      <Grid
                        container xs={12}
                        justifyContent={"space-between"}
                        sx={{ pt: 0 }}
                      >
                        <Button
                          onClick={handleBackBtn}
                          sx={mealStep.button}
                        >
                          Volver
                        </Button>
                        <Button
                          sx={mealStep.button}
                          type='submit'
                        >
                          Siguiente
                        </Button>
                      </Grid>
                    </form>
                  </>
                )
              }
              }
            </Formik>
          )
          : <CircularProgress />
      }
    </>

  )
}

export default CompoundMainDishStep