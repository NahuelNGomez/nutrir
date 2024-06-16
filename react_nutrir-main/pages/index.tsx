import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
import DashboardNewsCards from "@components/ui/contents/DashboardNewsCards";
export { getServerSideProps } from "../src/serverSideProps";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import { useEffect } from "react";
import axios from "axios";
import { comedorInit } from "../src/contexts/constants/initInfo";

const Home: NextPage = () => {
  const { modeTheme, user, setModalLogin, setComedoresDisponibles, comedoresDisponibles, comedorSeleccionado, setComedorSeleccionado, setModalOpen, firstLogin, setFirstLogin } = useAppCtx();
  const { dashboardStyles } = pagesStyles(modeTheme);


  useEffect(() => {

    if (firstLogin === false) {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
      const url = `${baseUrl}comedor/responsable/`
      const headers = { headers: { Authorization: `Bearer ${user.access_token}` } }

      axios.get(url, headers)
        .then(res => {
          setComedorSeleccionado(comedorInit)
          setFirstLogin(true)
          setComedoresDisponibles(res.data)
          if (res.status === 401) {
            setModalLogin(true)
          }

        })
        .catch(err => {
          if (err.response && err.response.status === 401) {
            setModalLogin(true)
          } else if (err.code === "ERR_NETWORK") {
            alert('No es posible la conexión con el servidor')
          }
        })
    }

  }, [comedoresDisponibles, comedorSeleccionado])

  useEffect(() => {
    if (comedorSeleccionado.id === 0  ) {
      if (comedoresDisponibles?.length > 0 ) {
        setModalOpen(true)
      }
    }

  }, [comedoresDisponibles, firstLogin, comedorSeleccionado])  

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={dashboardStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={dashboardStyles.title}>
            NOVEDADES
          </Typography>
          <Divider />
        </Grid>
        <DashboardNewsCards />
      </Grid>
    </LoggedLayout>
  );
};

export default Home;
