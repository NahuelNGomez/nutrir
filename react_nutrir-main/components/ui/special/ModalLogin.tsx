import {
  Box,
  Modal,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { FC } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import { componentsStyles } from "@styles/index";
import { useRouter } from "next/router";


const ModalLogin: FC<{}> = () => {
  const { modalLogin, setModalLogin, modeTheme } = useAppCtx();

  const {
    uiComponentStyles: { loginModalStyles },
  } = componentsStyles(modeTheme);

  const router = useRouter()

  const onLogoutHandler = () => {
    setModalLogin(false)
    fetch('api/logout')
      .then(() => {
        router.push("/login")
      })
      .catch(err => {
        console.log('client side err', { err });
      })
  }

  return (
    <Modal open={modalLogin} onClose={() => setModalLogin(false)}>
      <Box
        sx={loginModalStyles.modal}
      >
        <Grid
          container
          justifyContent={"space-between"}
          sx={loginModalStyles.headerContainer}
        >
          <Typography sx={loginModalStyles.headerTitle}>
            Su sesión ha expirado
          </Typography>
          <Typography sx={loginModalStyles.headerSubTitle}>
            Por favor, vuelva a iniciar sesión
          </Typography>
          <Grid
            container
            xs={12}
            sx={{ mt: 4}}
            justifyContent={'center'}
          >
            <Grid
              item
              xs={4}
            >
              <Button onClick={onLogoutHandler} sx={loginModalStyles.utils.completeButton}>
                Iniciar sesion
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
