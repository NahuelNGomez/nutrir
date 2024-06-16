import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
export { getServerSideProps } from "../src/serverSideProps"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import StatLoyout from "../components/stats/components/StatLayout/StatLoyout";
import { ChartsTypes } from "../components/stats/types";


const Stats: NextPage = () => {
  const { modeTheme, comedorSeleccionado } = useAppCtx();
  const { statsStyles } = pagesStyles(modeTheme);

  return (
    <LoggedLayout>
      <Grid
        container
        flexDirection={"row"}
        // justifyContent={"space-around"}
        sx={statsStyles.container}
      >
        <Grid
          item
          xs={12}
          lg={12}
        >
          <Typography sx={statsStyles.title}>
            {`Estadísticas del Comedor: ${comedorSeleccionado.nombre}`}
          </Typography>
          <Divider />
        </Grid>
        <Grid
          container
          xs={12}
          sx={{ pt: 2 }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            lg={12}
          >
            <Typography sx={statsStyles.subtitle}>
              Cantidad de raciones entregadas
            </Typography>
          </Grid>
          <StatLoyout
            title={'Cantidad de raciones de los últimos 7 días'}
            fetchType={ChartsTypes.RacionesSemana}
          />
          <StatLoyout
            title={'Cantidad de raciones de los últimos 30 días'}
            fetchType={ChartsTypes.RacionesMes}
          />

          <Grid
            item
            xs={12}
            lg={12}
          >
            <Typography sx={statsStyles.subtitle}>
              Cantidad de raciones por comida entregadas
            </Typography>
          </Grid>
          <StatLoyout
            title={'Cantidad de raciones por comida de los últimos 7 días'}
            fetchType={ChartsTypes.ComidaSemana}
          />
          <StatLoyout
            title={'Cantidad de raciones por comida de los últimos 30 días'}
            fetchType={ChartsTypes.ComidasMes}
          />

        </Grid>

      </Grid>
    </LoggedLayout>
  );
};

export default Stats;
