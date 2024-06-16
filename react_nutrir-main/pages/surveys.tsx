import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
export { getServerSideProps } from "../src/serverSideProps"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import SelectSurveyStep from "../components/surveys/steps/SelectSurveyStep";
import StepsLayout from "../components/surveys/steps/StepsLayout";
import { useEffect } from "react";
import { mealInit } from "../src/contexts/constants/initInfo";


const DailySurvers: NextPage = () => {
  const { modeTheme, selectedSurvey, setSelectedSurvey, setGuestsAmount, setDrinkStep, setSimpleMainMealStep, setEntryStep, setCompoundMainMailStep, setDessertStep, setDisplaySideStepper, setStepActive } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  useEffect(() => {
    return () => {
      setSelectedSurvey({ date: '', service: '' })
      setGuestsAmount({
        childs: 0,
        kids: 0,
        teens: 0,
        adults: 0
      })
      setDrinkStep(mealInit)
      setSimpleMainMealStep(mealInit)
      setEntryStep(mealInit)
      setCompoundMainMailStep(mealInit)
      setDessertStep(mealInit)
      setDisplaySideStepper(true)
      setStepActive(0);
    }
  }, [])
  

  return (
    <LoggedLayout>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={surveyStyles.container}
      >
        <Grid
          item
          xs={12}
          lg={12}
        >
          <Typography sx={surveyStyles.title}>
            COMPLETAR ENCUESTAS
          </Typography>
          <Divider />
        </Grid>


        {
          selectedSurvey?.service
            ? (
              <StepsLayout />
            )
            : (
              <SelectSurveyStep />
            )
        }

      </Grid>
    </LoggedLayout>
  );
};

export default DailySurvers;
