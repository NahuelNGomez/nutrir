
import { Button, Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
// export { getServerSideProps } from "../../src/serverSideProps"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import SurveysAvailable from "@components/ui/contents/SurveysAvailable";
// import { dishesList } from "../../src/contents/dishesList";
import { Box } from "@mui/system";
import DateSelect from "../../common/form/datePicker/DateSelect";

const PanelHeader = () => {
  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);
  
  return (
      <Grid
        container
        xs={12}
        lg={12}
        sx={{ margin: '1.5rem 0 2rem 0'}}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={7}
        >
          <Typography variant={"caption"} sx={surveyStyles.title}>
            ¿Qué día vas a cargar?
          </Typography>
        </Grid>

        <Grid
          item
          xs={3}
          justifyContent={'center'}
        >
          <DateSelect />
        </Grid>

        <Grid
          item
          xs={2}
          justifyContent={'center'}
        >
          <Button
            sx={{
              width: { xs: "100%" },
              borderRadius: "18px",
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              border: '1px solid #40a39b',
              color: "#ffffff",
            }}
          >
            Buscar
          </Button>
        </Grid>

      </Grid>
  );
};

export default PanelHeader;
