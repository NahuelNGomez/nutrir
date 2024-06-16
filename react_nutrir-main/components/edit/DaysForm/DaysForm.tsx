import { Alert, Button, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import DayAccordion from "../DayAccordion/DayAccordion";
import { FC, useState } from "react";
import { serviciosDiaType } from "../../../src/types/global";
import { daysName } from "./constants/constants";
import { Formik, FormikProps } from "formik";


interface Props {
  serviciosData: Array<serviciosDiaType>
}

const DaysForm: FC<Props> = ({ serviciosData }) => {

  const { modeTheme, comedorSeleccionado, user, setModalLogin } = useAppCtx();
  const [success, setSuccess] = useState(false)
  const [responseError, setResponseError] = useState(false)

  const {
    editStyles: { daysForm },
  } = pagesStyles(modeTheme);


  const successDisplay = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  const handleSubmit = (values: { funcionamientos: Array<serviciosDiaType> }) => {

    const valuesFiltered = values.funcionamientos.filter((el: serviciosDiaType) => {
      return el.funcionamientos.length > 0
    })

    const data = {
      comedor: comedorSeleccionado.id,
      funcionamientos: valuesFiltered,
      token: user.access_token
    }

    const config = {
      method: "POST",
      body: JSON.stringify(data),
    }

    fetch('api/merendero/days', config)
      .then(res => {
        // console.log('ress', res);
        
        if (res.status === 200) {
          successDisplay()
          setResponseError(false)
        }
        if (res.status === 401) {
          setModalLogin(true)
        }
      })
      .catch(err => {    
        setResponseError(true)
      })

  }

  return (
    <>
      {
        serviciosData.length
          ? (

            <Formik
              initialValues={{
                funcionamientos: serviciosData
              }}
              onSubmit={(values) => handleSubmit(values)}
            // validationSchema={validationSchema}
            >
              {(props: FormikProps<any>) => {

                return (
                  <>
                    <form onSubmit={props.handleSubmit}>
                      <Card>
                        <CardContent>
                          <Typography
                            sx={daysForm.title}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            Modificar comidas semanales
                          </Typography>

                          <Grid container xs={12} sx={{ mt: '20px' }}>
                            {
                              daysName.map(({ name, key }, index) => {

                                const dayData = serviciosData.filter(e => e.dia === key)

                                return (
                                  <Grid item key={`key_${name}`} xs={12}>
                                    <DayAccordion
                                      formikProps={props}
                                      dayData={dayData}
                                      dayName={name}
                                      index={index}
                                    />
                                  </Grid>
                                )
                              })
                            }
                          </Grid>
                        </CardContent>
                        <Grid container xs={12} justifyContent={'center'}>
                          <Button
                            sx={daysForm.utils.daysButton}
                            type="submit"
                          // onClick={() => router.push("/days")}
                          >
                            Guardar cambios
                          </Button>
                        </Grid>
                        {responseError && (
                          <div style={daysForm.utils.errorMessage}>
                            <Alert severity="error" sx={daysForm.utils.alertComponent}>
                              Hubo un error!
                            </Alert>
                          </div>
                        )}
                        {success && (
                          <div style={daysForm.utils.errorMessage}>
                            <Alert severity="success" sx={daysForm.utils.alertComponent}>
                              Se modificaron los servicios con éxito
                            </Alert>
                          </div>
                        )}
                      </Card>
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

export default DaysForm