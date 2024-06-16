import React, { FC } from "react";
import {
  ListItemIcon,
  MenuItem,
  Divider,
  MenuList,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import { ExitToApp, PublishedWithChanges } from "@mui/icons-material";
import { componentsStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import SwitchMode from "../special/SwitchMode";
import { useRouter } from "next/router";


const UserOptions: FC<{}> = () => {
  const { setModalOpen, modeTheme, updateTheme, setComedorSeleccionado, setComedoresDisponibles } = useAppCtx();
  const { contentStyles: { userMenuStyles } } = componentsStyles(modeTheme);

  const router = useRouter()

  const onLogoutHandler = () => { 
    
    fetch('api/logout')
      .then(() => {
        router.push("/login")
      })
      .catch(err => {
        console.log('client side err', { err });
      })
  }

  return (
    <MenuList sx={userMenuStyles.menu_list}>
      <MenuItem onClick={() => setModalOpen(true)}>
        <ListItemIcon>
          <PublishedWithChanges />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={userMenuStyles.menu_text}
          primary={"Cambiar de comedor"}
        />
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText
          onClick={onLogoutHandler}
          primaryTypographyProps={userMenuStyles.menu_text}
          primary={"Salir"}
        />
      </MenuItem>
      <Divider />
      <Grid container justifyContent={"center"}>
        <Typography sx={{ fontWeight: "500" }}>Otras Configuraciones</Typography>
      </Grid>
      <MenuItem sx={{ mt: 1 }} onClick={() => updateTheme(modeTheme == "dark" ? "light" : "dark")}>
        <SwitchMode />
        <ListItemText
          primaryTypographyProps={userMenuStyles.menu_text.sx}
          primary={modeTheme === 'light' ? 'Cambiar a modo Oscuro' : 'Cambiar a modo claro'}
        />
      </MenuItem>
    </MenuList>
  );
};

export default UserOptions;
