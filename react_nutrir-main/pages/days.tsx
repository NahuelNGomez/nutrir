import LoggedLayout from "@components/layouts/LoggedLayout";
import DayTime from "@components/ui/contents/DayTime";
import { Divider, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
export { getServerSideProps } from "../src/serverSideProps";

const Days: NextPage = () => {
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const { modeTheme } = useAppCtx();

  const { daysStyles } = pagesStyles(modeTheme);
  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        sx={daysStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={daysStyles.title}>
            Modificar Horarios
          </Typography>
          <Divider />
        </Grid>

        {days.map((day, index) => (
          <DayTime day={day} key={index} />
        ))}
      </Grid>
    </LoggedLayout>
  );
};

export default Days;
