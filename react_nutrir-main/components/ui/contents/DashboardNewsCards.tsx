import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { pagesStyles } from "@styles/index";
import { useRouter } from "next/router";
import { FC } from "react";
import { dashboardCards } from "../../../src/contents/cardsList";
import { useAppCtx } from "../../../src/contexts/store";
import axios from "axios";
import currentDay from "../../../src/utils/currentDate";

const DashboardNewsCards: FC<{}> = () => {
  const router = useRouter();
  const { modeTheme, comedorSeleccionado, setModalLogin, setEncuestasAdeudadas, user, setTodaySurveySelected } = useAppCtx();
  const { dashboardStyles: { CardsStyles } } = pagesStyles(modeTheme);

  const onClickFirstCard = (e: any) => {
    setEncuestasAdeudadas([])

    const id = comedorSeleccionado?.id
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const url = `${baseUrl}encuesta/incompletas_dia/${id}/${currentDay('YYYY-MM-DD')}`
    const headers = { headers: { Authorization: `Bearer ${user.access_token}` } }

    axios.get(url, headers)
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          const data = res.data.encuestas

          if(data.length === 0 ){
            alert('No hay encuestas pendientes para hoy')
          } else {
            setTodaySurveySelected(true)
            setEncuestasAdeudadas([...data])
            router.push('/surveys')
          }
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })

  }

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={'firstcardIndex'}>
        <Card>
          <Grid
            sx={{
              ...CardsStyles.container,
              backgroundImage:
                modeTheme == "light"
                  ? "-webkit-linear-gradient(71deg, #7ef6a3 50%, #7aeea7 50%)"
                  : CardsStyles.dark_bg,
            }}
          >
            <img src={'/images/ui/dash/01sin fondo.png'} width="148" />
          </Grid>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {'¡Las encuestas del día esperan tu respuesta!'}
            </Typography>
          </CardContent>
          <CardActions sx={CardsStyles.actions}>
            <Button
              sx={CardsStyles.button}
              size="large"
              onClick={onClickFirstCard}
              color="primary"
            >
              {'COMPLETAR'}
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {dashboardCards.map(
        ({ title, image, redirectTo, background_light, title_button }, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
            <Card>
              <Grid
                sx={{
                  ...CardsStyles.container,
                  backgroundImage:
                    modeTheme == "light"
                      ? background_light
                      : CardsStyles.dark_bg,
                }}
              >
                <img src={image} width="148" />
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </CardContent>
              <CardActions sx={CardsStyles.actions}>
                <Button
                  sx={CardsStyles.button}
                  size="large"
                  onClick={() => router.push(redirectTo)}
                  color="primary"
                >
                  {title_button}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      )}
    </>
  );
};

export default DashboardNewsCards;
