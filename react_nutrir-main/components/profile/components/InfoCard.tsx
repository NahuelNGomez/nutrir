import { Avatar, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import PersonIcon from "@mui/icons-material/Person";
import { pagesStyles } from "@styles/index";
import userTypeConverter from "../utils/userTypeConverter";

const InfoCard: FC<{}> = () => {
  const { modeTheme, user } = useAppCtx();

  const {
    profileStyles: { infoCardStyles },
  } = pagesStyles(modeTheme);

  return (
    <Grid sx={infoCardStyles.container}>
      <Typography sx={infoCardStyles.cardTitle}>
        {user.first_name + ', ' + user.last_name}
      </Typography>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={infoCardStyles.infoSeccion}
      >
        <Avatar sx={infoCardStyles.avatar}>
          <PersonIcon fontSize="large" sx={{ color: "white" }} />
        </Avatar>
        <Grid>
          <Typography sx={infoCardStyles.userInfo}>
            {/* Tipo de Perfil: {user.groups.length > 0 ? userTypeConverter(user.groups[0]) : ''}
             */}
            Tipo de Perfil: Completar
          </Typography>
          <Typography sx={infoCardStyles.userInfo}>
            Te uniste el : 10 de diciembre del 2022
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCard;
