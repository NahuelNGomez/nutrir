import { CircularProgress, Collapse, Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import MerenderoCard from "@components/ui/special/MerenderoCard";
import { comedorInfoType } from "../../../src/types/global";
import { merenderosDataFetch } from "../services";
import { fetchErrorHandler } from "../../../src/dataFetch/fetchErrorHandler";


const MerenderoCards: FC<{}> = () => {

  const { user, setModalLogin } = useAppCtx();
  const [comedores, setComedores] = useState<Array<comedorInfoType>>([])

  useEffect(() => {
    merenderosDataFetch(user.access_token)
    .then(res =>{
      if (res.status === 401) {
        setModalLogin(true)
      } else {
        setComedores(res.data)
      }
    })
    .catch(err =>{
      fetchErrorHandler(err, setModalLogin) 
    })

  }, [user])

  const { modeTheme } = useAppCtx();
  const {
    profileStyles: { merenderosCardsStyles },
  } = pagesStyles(modeTheme);
  const [collapse, setCollapse] = useState(false);

  return (
    <Grid xl={12}>

      <Typography sx={merenderosCardsStyles.title}>
        Comedores Habilitados
      </Typography>

      {
        comedores
          ? comedores?.map((comedor, index) => (
            <MerenderoCard comedor={comedor} name={comedor.nombre} address={`${comedor.calle} ${comedor.numero}, ${comedor.provincia}`} key={index} />
          ))
          : (
            <CircularProgress
              size={20}
              // sx={loginStyles.utils.circularProgress}
              sx={{
                ml: "50%",
                mt: '15%',
              }}
              color="inherit"
            />
          )
      }
      <Grid justifyContent={"center"}>

      </Grid>
      {comedores.length > 1 && (
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          {comedores?.map((merendero, index) => (
            <MerenderoCard comedor={merendero} name={merendero.descripcion} address={'123'} key={index} />
          ))}
        </Collapse>
      )}

    </Grid>
  );
};

export default MerenderoCards;
