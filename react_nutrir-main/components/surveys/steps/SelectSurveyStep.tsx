import { useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import PanelHeader from "../dateTable/PanelHeader";
import DataTable from '../../common/form/DateTable/DataTable'
import { owedMonthlySurveysFetch } from "../services";
import { fetchErrorHandler } from "../../../src/dataFetch/fetchErrorHandler";


const SelectSurveyStep = () => {

  const { modeTheme, user, setModalLogin, comedorSeleccionado, setEncuestasAdeudadas, encuestasAdeudadas, todaySurveySelected, setTodaySurveySelected } = useAppCtx();
  const { surveyStyles: { dataTable } } = pagesStyles(modeTheme);

  useEffect(() => {

    if (!todaySurveySelected) {
      owedMonthlySurveysFetch(user.access_token, comedorSeleccionado?.id)
        .then(res => {
          setEncuestasAdeudadas([...res.data.encuestas])
        })
        .catch(err => {   
          fetchErrorHandler(err, setModalLogin)
        })

    }
    return () => {
      setTodaySurveySelected(false)
    }

  // }, [encuestasAdeudadas])
  }, [])



  return (

    <Grid
      container
      item
      xs={12}
      lg={11}
      flexDirection={"row"}
      justifyContent={"center"}
      sx={dataTable.container}
    >
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <PanelHeader />
            <DataTable
              encuestasAdeudadas={encuestasAdeudadas}
              user={user}
              comedorId={comedorSeleccionado.id}
              setModalLogin={setModalLogin}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>




  );
};

export default SelectSurveyStep;
