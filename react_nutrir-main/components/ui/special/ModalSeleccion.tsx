import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { componentsStyles } from "@styles/index";
import { merenderosDataFetch } from "../../profile/services";
import { fetchErrorHandler } from "../../../src/dataFetch/fetchErrorHandler";


const ModalSeleccion: FC<{}> = () => {
  const { modalOpen, setModalOpen, modeTheme, comedoresDisponibles, setComedorSeleccionado, setModalLogin, user } = useAppCtx();
  const [search, setSearch] = useState("");

  const [comedoresModal, setComedoresModal] = useState([])
  const [comedorActive, setComedorActive] = useState<number>()

  useEffect(() => {
    if(user?.access_token){
      merenderosDataFetch(user.access_token)
      .then(res =>{
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          setComedoresModal(res.data)
        }
      })
      .catch(err =>{
        fetchErrorHandler(err, setModalLogin) 
      })
    }
  }, [user])
  

  const results = useMemo(() => {
    if (search.length === 0) {
      return comedoresDisponibles;
    }

    return comedoresDisponibles.filter((comedor) => comedor.nombre.includes(search));
  }, [search, comedoresDisponibles]);

  const {
    uiComponentStyles: { merenderosModalStyles },
  } = componentsStyles(modeTheme);


  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={merenderosModalStyles.modal}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={merenderosModalStyles.headerContainer}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            Elija un Comedor
          </Typography>
          <CloseIcon
            sx={merenderosModalStyles.closeIcon}
            onClick={() => setModalOpen(false)}
          />
        </Grid>

        <TextField
          sx={merenderosModalStyles.searchInput}
          id="outlined-basic"
          label="Buscar Comedor"
          variant="outlined"
          focused
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <List>
          {results.map((comedor, index) => (
            <ListItemButton
              key={index}
              sx={{
                border: !comedor.selected
                  ? merenderosModalStyles.borderUnselected
                  : merenderosModalStyles.borderSelected,
                color: comedor.selected
                  ? merenderosModalStyles.colorSelected
                  : "",
                ...merenderosModalStyles.item,
              }}
              onClick={()=>{
                comedor.selected = true;
                setComedorActive(comedor.id)
                setComedorSeleccionado(comedor)
                setModalOpen(false)
              }}
            >
              <ListItemIcon>
                {comedor.id === comedorActive ? (
                  <CheckCircleOutlineIcon
                    fontSize={"medium"}
                    color={"primary"}
                    sx={merenderosModalStyles.itemIcon}
                  />
                ) : (
                  <PanoramaFishEyeIcon
                    fontSize={"medium"}
                    sx={merenderosModalStyles.itemIcon}
                  />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h3"
                    sx={merenderosModalStyles.primaryText}
                  >
                    {comedor.nombre}
                  </Typography>
                }
                secondary={comedor.calle  + ' ' + comedor.numero + ', ' + 'Buenos Aires'}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default ModalSeleccion;
