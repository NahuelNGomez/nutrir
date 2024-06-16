import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { statesForms } from "../../../src/constants/states";
import { useAppCtx } from "../../../src/contexts/store";
import useForm from "../../../src/hooks/useForm";
import { profileFields } from "../../../src/types/forms";
import { pagesStyles } from "@styles/index";
import { Formik, FormikProps, useFormik } from "formik";
import passwordSchema from "../schema/passwordSchema";
import { string } from "yup/lib/locale";
import { passwordType } from "../types/profileTypes";
import { passwordPost } from "../services";


const PassForm: FC<{}> = () => {
  const { modeTheme, user, setModalLogin } = useAppCtx();

  const {
    fields,
    errors,
    processing,
    updateField,
    submit,
    defaultValues,
    finishProcess,
  } = useForm<profileFields>(statesForms.password_reset);
  const [success, setSuccess] = useState(false)
  const [responseError, setResponseError] = useState(false)

  const {
    profileStyles: { passFormStyles },
  } = pagesStyles(modeTheme);

  const successDisplay = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  const handlePassSubmit = (values: passwordType) => {
    passwordPost(values, user.access_token)
      .then(res => {
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

  const formik = useFormik({
    initialValues: {
      new_password1: '',
      new_password2: ''
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      handlePassSubmit(values)
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <Typography
            sx={passFormStyles.title}
            gutterBottom
            variant="h5"
            component="h5"
          >
            Cambia tu contraseña
          </Typography>
        </Grid>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Grid item xs={12} sm={12} lg={12} xl={12} sx={passFormStyles.fields}>
            <TextField
              fullWidth
              id="new_password1"
              label="Elegi una contraseña (opcional)"
              variant="outlined"
              type="password"
              name="new_password1"
              margin="normal"
              sx={passFormStyles.textInput}
              value={formik.values.new_password1}
              onChange={formik.handleChange}
              error={formik.touched.new_password1 && Boolean(formik.errors.new_password1)}
              helperText={formik.touched.new_password1 && formik.errors.new_password1}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12} sx={passFormStyles.fields}>
            <TextField
              fullWidth
              id="new_password2"
              label="confirma tu contraseña (opcional)"
              variant="outlined"
              type="password"
              name="new_password2"
              margin="normal"
              sx={passFormStyles.textInput}
              value={formik.values.new_password2}
              onChange={formik.handleChange}
              error={formik.touched.new_password2 && Boolean(formik.errors.new_password2)}
              helperText={formik.touched.new_password2 && formik.errors.new_password2}
            />
          </Grid>
        </Grid>
        <Grid sx={passFormStyles.actions.container}>
          <Button
            type="submit"
            disabled={processing.loading}
            variant="contained"
            sx={passFormStyles.submiButton}
            color={processing.loading ? "inherit" : "primary"}
          >
            Actualizar{" "}
            {processing.loading && (
              <CircularProgress
                size={20}
                sx={passFormStyles.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </Grid>
      </form>
      {responseError && (
        <div style={passFormStyles.errorMessage}>
          <Alert severity="error" sx={passFormStyles.alertComponent}>
            Hubo un error!
          </Alert>
        </div>
      )}
      {success && (
        <div style={passFormStyles.errorMessage}>
          <Alert severity="success" sx={passFormStyles.alertComponent}>
            Se modifico con exito tu contraseña
          </Alert>
        </div>
      )}

    </div>
  )

};

export default PassForm;
