import { Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material"
import { FC, useState, useEffect } from "react"
import { guestType } from "../../../src/types/global"
import { useAppCtx } from "../../../src/contexts/store"
import { useFormik } from "formik"
import validationSchema from "../../common/form/schema/schema"
import { pagesStyles } from "@styles/index"
import survey from "@styles/pages/survey"

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}


const GuestsStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep
}) => {

  const { modeTheme, setSelectedSurvey, guestsAmount, setGuestsAmount, setStepActive } = useAppCtx();
  const { surveyStyles: { guests } } = pagesStyles(modeTheme);
  const [disableBtn, setDisableBtn] = useState(true)

  const formik = useFormik<guestType>({
    initialValues: guestsAmount,
    validationSchema: validationSchema,
    onSubmit: (values: guestType) => {
      // alert(JSON.stringify(values, null, 2));
      handleGoToNextStep()
      setStepActive(1)
      setGuestsAmount(values)
    },
  })

  const handleBackBtn = () => {
    setSelectedSurvey({ date: '', service: '' })
    setGuestsAmount({
      childs: 0,
      kids: 0,
      teens: 0,
      adults: 0
    })
    setStepActive(0)
    handleGoToPreviousStep()
  }

  useEffect(() => {
    const guestsAdd = formik.values.childs + formik.values.kids + formik.values.teens + formik.values.adults
    if (guestsAdd > 0) setDisableBtn(false)
    if (guestsAdd <= 0) setDisableBtn(true)
  }, [formik.values.childs, formik.values.kids, formik.values.teens, formik.values.adults])



  return (
    <Grid item>
      <Grid container>     
        <form onSubmit={formik.handleSubmit}>
          <Card sx={{ pt: 3, pb: 2 }}>
            <CardContent >
              <Grid
                container
                sx={{
                  gap: '1.5rem',
                  borderRadius: '5px'
                }}
                boxShadow={'inherit'}
                alignItems='center'
                justifyContent={'center'}
              >
                <Grid item xs={11}>
                  <TextField
                    name='childs'
                    id="childs"
                    label="Infantes de 0 a 5 años"
                    type="number"
                    fullWidth
                    placeholder="Infantes de 0 a 5 años"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.childs}
                    onChange={formik.handleChange}
                    error={formik.touched.childs && Boolean(formik.errors.childs)}
                    helperText={formik.touched.childs && formik.errors.childs}
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    name='kids'
                    // id="outlined-number"
                    id="kids"
                    label="Niñxs de 5 a 10 años"
                    type="number"
                    placeholder="Niñxs de 5 a 10 años"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.kids}
                    onChange={formik.handleChange}
                    error={formik.touched.kids && Boolean(formik.errors.kids)}
                    helperText={formik.touched.kids && formik.errors.kids}
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    name='teens'
                    // id="outlined-number"
                    id="teens"
                    label="Adolescentes de 10 a 18 años"
                    type="number"
                    placeholder="Adolescentes de 10 a 18 años"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.teens}
                    onChange={formik.handleChange}
                    error={formik.touched.teens && Boolean(formik.errors.teens)}
                    helperText={formik.touched.teens && formik.errors.teens}
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    name='adults'
                    // id="outlined-number"
                    id="adults"
                    label="Adultos más de 18 años"
                    type="number"
                    placeholder="Adultos más de 18 años"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.adults}
                    onChange={formik.handleChange}
                    error={formik.touched.adults && Boolean(formik.errors.adults)}
                    helperText={formik.touched.adults && formik.errors.adults}
                  />

                </Grid>
              </Grid>

            </CardContent>
          </Card>

          <Grid
            container
            xs={12}
            justifyContent={"space-between"}
            sx={{ pt: 0 }}
          >
            <Button
              onClick={handleBackBtn}
              sx={guests.button}
            >
              Volver
            </Button>
            <Button
              type="submit"
              // onClick={handleNextBtn}
              sx={guests.button}
              disabled={disableBtn}
            >
              Siguiente
            </Button>
          </Grid>

        </form>
      </Grid>
    </Grid>
  )
}

export default GuestsStep