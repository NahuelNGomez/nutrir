import LoggedLayout from "@components/layouts/LoggedLayout";
import {
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { pagesStyles } from "@styles/index";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import DaysForm from "../components/edit/DaysForm/DaysForm";
import DinnerQuarterForm from "../components/edit/DinnerQuerterForm/DinnerQuarterForm";
import { useAppCtx } from "../src/contexts/store";
import { comedorInfoType, serviciosDiaType } from "../src/types/global";
import { comedorDataFetch, weekServicesFetch } from "../components/edit/services";
import { fetchErrorHandler } from "../src/dataFetch/fetchErrorHandler";
export { getServerSideProps } from "../src/serverSideProps";

const Edit: NextPage = () => {
  const { modeTheme, user, comedorSeleccionado, setModalLogin } = useAppCtx();
  const [comedorData, setComedordata] = useState<Array<comedorInfoType>>([])
  const [serviciosData, setServiciosData] = useState<Array<serviciosDiaType>>([])

  const { editStyles } = pagesStyles(modeTheme);
  
  const { access_token } = user
  const { id } = comedorSeleccionado

  useEffect(() => {
    comedorDataFetch(access_token, id)
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        }
        setComedordata(res.data)
      })
      .catch(err => {
        fetchErrorHandler(err, setModalLogin)
      })
  }, [id])

  useEffect(() => {
    weekServicesFetch(access_token, id)
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        }
        setServiciosData(res.data.data)
      })
      .catch(err => {
        fetchErrorHandler(err, setModalLogin)
      })
  }, [id])

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={editStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={editStyles.title}>
            Modificar Comedor
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: -2 }}>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              {comedorData[0]
                ? <DinnerQuarterForm comedorData={comedorData} />
                : (
                  <CircularProgress
                    size={20}
                    // sx={loginStyles.utils.circularProgress}
                    sx={{ marginLeft: "5px", }}
                    color="inherit"
                  />
                )
              }

            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
            >
              {
                serviciosData.length > 0
                  ? <DaysForm serviciosData={serviciosData} />
                  : (
                    <CircularProgress
                      size={20}
                      // sx={loginStyles.utils.circularProgress}
                      sx={{
                        ml: "50%",
                        mt: '30%',
                      }}
                      color="inherit"
                    />
                  )
              }
            </Grid>

          </Grid>
        </Grid>


      </Grid>
    </LoggedLayout>
  );
};

export default Edit;
