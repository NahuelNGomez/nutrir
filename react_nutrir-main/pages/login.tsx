import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
  Alert,
  LinearProgress,
  CircularProgress,
  Card,
  Grid,
} from "@mui/material";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { pagesStyles } from "@styles/index";
import useForm from "../src/hooks/useForm";
import { useRouter } from "next/router";
import { loginFields } from "../src/types/forms";
import { statesForms } from "../src/constants/states";
import { useAppCtx } from "../src/contexts/store";
import UnloggedLayout from "@components/layouts/UnloggedLayout";


const Login: NextPage = () => {
  const router = useRouter();
  const { modeTheme, user, setFirstLogin } = useAppCtx();
  const { fields, errors, processing, updateField, submit } = useForm<loginFields>(
    statesForms.login
  );
  const { loginStyles } = pagesStyles(modeTheme);

  const [passwordError, setPasswordError] = useState(false)


  return (
    <UnloggedLayout>
      <Grid
        item
        flexDirection={"column"}
        xs={12}
        sm={8}
        lg={4}
        xl={3}
        sx={{ padding: "10px" }}
      >
        <Card>
          {processing.loading && <LinearProgress color="primary" />}
          <form
            onSubmit={(e) =>
              submit(e, "/api/login")
                .then(() => {
                  router.push("/")
                  setPasswordError(false)
                  setFirstLogin(false)
                })
                .catch(err =>{
                  console.log('error login', err);
                  setPasswordError(true)
                })
            }
          >
            <CardContent sx={loginStyles.cardContent}>
              <img
                src={
                  modeTheme == "dark"
                    ? "/images/ui/NUTRIR logo-transparente-01.png"
                    : "/images/ui/NUTRIR logo-03.png"
                }
                style={{ width: "200px" }}
              />

              <div style={loginStyles.utils.container}>
                <TextField
                  error={errors.cuil}
                  fullWidth
                  id="input-with-sx"
                  label="Usuario"
                  variant="outlined"
                  name="cuil"
                  margin="normal"
                  value={fields.cuil}
                  sx={loginStyles.utils.textInput}
                  helperText={
                    errors.cuil ? "Debes ingresar tu usuario/correo" : ""
                  }
                  onChange={updateField}
                />

                <TextField
                  type={"password"}
                  error={errors.password}
                  fullWidth
                  id="input-with-sx"
                  label="Contraseña"
                  variant="outlined"
                  margin="normal"
                  name="password"
                  sx={loginStyles.utils.textInput}
                  value={fields.password}
                  helperText={
                    errors.password ? "Debes ingresar tu contraseña" : ""
                  }
                  onChange={updateField}
                />
                <Typography
                  sx={loginStyles.utils.linkText}
                  onClick={() => router.push("recovery_account")}
                >
                  {" "}
                  ¿Olvidaste tu contraseña?
                </Typography>
              </div>
            </CardContent>
            <CardActions sx={loginStyles.actions.container}>
              <div style={loginStyles.utils.container}>
                <Button
                  disabled={processing.loading}
                  type="submit"
                  variant="contained"
                  sx={loginStyles.utils.submitButton}
                  color={processing.loading ? "inherit" : "primary"}
                >
                  Ingresar{" "}
                  {processing.loading && (
                    <CircularProgress
                      size={20}
                      sx={loginStyles.utils.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </div>
            </CardActions>
            <CardActions sx={loginStyles.actions.helperText}>
              <Typography sx={loginStyles.actions.floatingText}>
                ¿No tienes una cuenta?{" "}
                <Button
                  size="small"
                  sx={loginStyles.utils.linkText}
                  onClick={() => router.push("register")}
                >
                  Registrate
                </Button>
              </Typography>
            </CardActions>
            {passwordError && (
              <div style={loginStyles.utils.errorMessage}>
                <Alert severity="error" sx={{ justifyContent: "center" }}>
                  Usuario o Contraseña son incorrectas
                </Alert>
              </div>
            )}
          </form>
        </Card>
      </Grid>
    </UnloggedLayout>
  );
};

export default Login;
