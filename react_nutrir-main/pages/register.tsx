import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { pagesStyles } from "@styles/index";
import { useRouter } from "next/router";
import useForm from "../src/hooks/useForm";
import { registerFields } from "../src/types/forms";
import { statesForms } from "../src/constants/states";
import { useAppCtx } from "../src/contexts/store";
import UnloggedLayout from "@components/layouts/UnloggedLayout";

const Register: NextPage = () => {
  const router = useRouter();
  const { modeTheme } = useAppCtx();
  const { fields, errors, processing, updateField, updateFieldProps, submit } =
    useForm<registerFields>(statesForms.register);
  const { registerStyles } = pagesStyles(modeTheme);

  return (
    <UnloggedLayout>
      <Grid
        flexDirection={"column"}
        xs={12}
        sm={12}
        lg={6}
        xl={6}
        sx={registerStyles.container}
      >
        <Card>
          {processing.loading && <LinearProgress color="primary" />}
          <form
            onSubmit={(e) =>
              submit(e, "/api/register").then(() => router.push("/"))
            }
          >
            <CardContent>
              <Typography
                sx={registerStyles.title}
                gutterBottom
                variant="h5"
                component="div"
              >
                Registrarse
              </Typography>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <TextField
                    error={errors.user}
                    fullWidth
                    id="input-with-sx"
                    label="Usuario"
                    variant="outlined"
                    type="text"
                    name="user"
                    margin="normal"
                    value={fields.user}
                    sx={registerStyles.utils.textInput}
                    helperText={errors.user ? "Debes ingresar tu usuario" : ""}
                    onChange={updateField}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <TextField
                    error={errors.name}
                    fullWidth
                    id="input-with-sx"
                    label="Nombre y Apellido"
                    variant="outlined"
                    type="text"
                    name="name"
                    margin="normal"
                    value={fields.name}
                    sx={registerStyles.utils.textInput}
                    helperText={
                      errors.name ? "Debes ingresar tu nombre y appellido" : ""
                    }
                    onChange={updateField}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <TextField
                    error={errors.phone}
                    fullWidth
                    id="input-with-sx"
                    label="Telefono"
                    variant="outlined"
                    type="text"
                    name="phone"
                    margin="normal"
                    value={fields.phone}
                    sx={registerStyles.utils.textInput}
                    helperText={
                      errors.phone ? "Debes ingresar tu telefono" : ""
                    }
                    onChange={updateField}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <TextField
                    error={errors.email}
                    fullWidth
                    id="input-with-sx"
                    label="Correo Electronico"
                    variant="outlined"
                    type="email"
                    name="email"
                    margin="normal"
                    value={fields.email}
                    sx={registerStyles.utils.textInput}
                    helperText={errors.email ? "Debes ingresar tu correo" : ""}
                    onChange={updateField}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <TextField
                    error={errors.password}
                    fullWidth
                    id="input-with-sx"
                    label="Elegi una contraseña"
                    variant="outlined"
                    type="password"
                    name="password"
                    margin="normal"
                    value={fields.password}
                    sx={registerStyles.utils.textInput}
                    helperText={
                      errors.password ? "Debes ingresar tu telefono" : ""
                    }
                    onChange={updateField}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <FormControl
                    variant="outlined"
                    sx={registerStyles.utils.selectInput}
                    error={errors.exists_dinning_room}
                  >
                    <InputLabel
                      id="exists_dinning_room-label"
                      sx={registerStyles.utils.selectInputLabel}
                    >
                      Ya esta registrado su comedor?
                    </InputLabel>
                    <Select
                      labelId="exists_dinning_room-label"
                      id="exists_dinning_room-filled"
                      name="exists_dinning_room"
                      value={fields.exists_dinning_room}
                      onChange={(e: SelectChangeEvent) =>
                        updateFieldProps("exists_dinning_room", e.target.value)
                      }
                    >
                      <MenuItem value={"yes"}>Ya está registrado.</MenuItem>
                      <MenuItem value={"no"}>Aún no está registrado.</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container direction={"row"} justifyContent={"flex-end"}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  xl={6}
                  sx={registerStyles.utils.fields}
                >
                  <FormControl
                    variant="outlined"
                    sx={registerStyles.utils.selectInput}
                    error={errors.dinning_room}
                  >
                    <InputLabel
                      id="dinning_room-label"
                      sx={registerStyles.utils.selectInputLabel}
                    >
                      Comedor al que perteneces.
                    </InputLabel>
                    <Select
                      labelId="dinning_room-label"
                      id="dinning_room-filled"
                      name="dinning_room"
                      value={fields.dinning_room}
                      onChange={(e: SelectChangeEvent) =>
                        updateFieldProps("dinning_room", e.target.value)
                      }
                    >
                      <MenuItem value={"1"}>Por los Chicos del barrio</MenuItem>
                      <MenuItem value={"2"}>Por una sonrisa</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={registerStyles.actions.container}>
              <div style={registerStyles.utils.container}>
                <Button
                  disabled={processing.loading}
                  type="submit"
                  variant="contained"
                  sx={registerStyles.utils.submitButton}
                  color={processing.loading ? "inherit" : "primary"}
                >
                  Registrarse{" "}
                  {processing.loading && (
                    <CircularProgress
                      size={20}
                      sx={registerStyles.utils.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </div>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </UnloggedLayout>
  );
};

export default Register;
