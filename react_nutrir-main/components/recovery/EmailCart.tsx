import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  LinearProgress,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { pagesStyles } from "@styles/index";
import useForm from "../../src/hooks/useForm";
import { emailResetFields } from "../../src/types/forms";
import { FC } from "react";
import { statesForms } from "../../src/constants/states";
import { useAppCtx } from "../../src/contexts/store";
import { useRouter } from "next/router";

const EmailCart: FC<{}> = () => {
  const { fields, errors, processing, updateField, submit, finishProcess } =
    useForm<emailResetFields>(statesForms.email_reset);
  const { modeTheme } = useAppCtx();
  const router = useRouter();

  const {
    recoveryAccountStyles: { emailCartStyles },
  } = pagesStyles(modeTheme);

  return (
    <>
      {processing.loading && <LinearProgress color="primary" />}
      <form onSubmit={(e) => submit(e, "/api/reset/email").then(() => finishProcess())}>
        <CardContent sx={emailCartStyles.cardContent}>
          <Typography
            sx={emailCartStyles.utils.titleCard}
            gutterBottom
            variant="h5"
            component="div"
          >
            Recuperá tu contraseña
          </Typography>
          <Typography>
            Con tu correo electrónico vas a poder generar una nueva contraseña
            para acceder a la plataforma.
          </Typography>
          <Grid style={emailCartStyles.utils.container}>
            <TextField
              error={errors.email}
              fullWidth
              id="input-with-sx"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              margin="normal"
              value={fields.email}
              sx={emailCartStyles.utils.textInput}
              helperText={
                errors.email ? "Debes ingresar tu usuario/correo" : ""
              }
              onChange={updateField}
            />
          </Grid>
        </CardContent>
        <CardActions sx={emailCartStyles.actions.container}>
          <Button
            disabled={processing.loading}
            type="submit"
            variant="contained"
            size="medium"
            sx={emailCartStyles.utils.submitbutton}
            color={processing.loading ? "inherit" : "primary"}
          >
            Enviar{" "}
            {processing.loading && (
              <CircularProgress
                size={20}
                sx={emailCartStyles.utils.circularProgress}
                color="inherit"
              />
            )}
          </Button>
          <Typography
            sx={emailCartStyles.utils.linkBack}
            onClick={() => router.push("/login")}
          >
            Volver al inicio
          </Typography>
        </CardActions>
      </form>
      {!processing.validate && (
        <Grid style={emailCartStyles.utils.errorMessage}>
          <Alert severity="error">
            No encontramos un registro con el correo electronico ingresado.
          </Alert>
        </Grid>
      )}
      {processing.finish && (
        <Grid style={emailCartStyles.utils.errorMessage}>
          <Alert severity="success">
            Se envio el correo de verificación exitosamente.
          </Alert>
        </Grid>
      )}
    </>
  );
};

export default EmailCart;
