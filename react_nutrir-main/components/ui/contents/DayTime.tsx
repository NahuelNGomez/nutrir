import {
  Card,
  CardActions,
  Collapse,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { pagesStyles } from "@styles/index";

type props = {
  day: string;
};

const DayTime: FC<props> = ({ day }) => {
  const { modeTheme } = useAppCtx();
  const [collapse, setCollapse] = useState(true);
  const {
    daysStyles: { dayTimeStyles },
  } = pagesStyles(modeTheme);

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
      <Card>
        <Grid sx={dayTimeStyles.card}>
          <CalendarMonthOutlinedIcon sx={dayTimeStyles.calendarIcon} />
          <Typography sx={dayTimeStyles.nameDay}>{day}</Typography>
        </Grid>

        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <CardActions sx={dayTimeStyles.actions}>
            <Grid container wrap="wrap">
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Desayuno" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Almuerzo" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Merienda" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Cena" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Olla Popular" />
                </FormGroup>
              </Grid>
            </Grid>
          </CardActions>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default DayTime;
