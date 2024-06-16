import { Card, Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import { useRouter } from "next/router";
import { comedorInfoType } from "../../../src/types/global";

const MerenderoCard: FC<{ name?: string; address?: string, comedor: comedorInfoType }> = ({
  name,
  address,
  comedor
}) => {
  const { modeTheme, setComedorSeleccionado, comedorSeleccionado } = useAppCtx();
  const [selected, setSelected] = useState(false)
  const router = useRouter()
  const comedorSeleccionadoId = comedorSeleccionado.id

  useEffect(() => {
    if (comedor.id === comedorSeleccionadoId) {
      setSelected(true)
    } else{
      setSelected(false)
    }
  }, [comedorSeleccionadoId])


  const {
    profileStyles: { merenderosCardsStyles },
  } = pagesStyles(modeTheme);

  const editButtonHandler = () => {
    setComedorSeleccionado(comedor)
    router.push('/edit')
  }

  const selectButtonHandler = () => {
    setComedorSeleccionado(comedor)
  }

  return (
    <Grid xl={12}>
      <Card sx={(selected ? merenderosCardsStyles.cardActive : merenderosCardsStyles.card)}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography >{name}</Typography>
            <Typography >
              {address}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={merenderosCardsStyles.actions}
          >
            <div onClick={editButtonHandler}>
              <Typography sx={merenderosCardsStyles.button}>Editar</Typography>
            </div>
            <div onClick={selectButtonHandler}>
              <Typography sx={merenderosCardsStyles.button}>
                Seleccionar
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Card >
    </Grid >
  );
};

export default MerenderoCard;
