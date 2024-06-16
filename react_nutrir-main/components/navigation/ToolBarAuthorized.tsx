import { Grid, IconButton, Toolbar } from "@mui/material";
import { componentsStyles } from "@styles/index";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "@components/ui/special/UserMenu";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  changeOpen(): void;
};

const AuthorizedToolBar: FC<props> = ({ changeOpen }) => {
  const {modeTheme,menuOpen} = useAppCtx();

  const {navigationStyles} = componentsStyles(modeTheme)
  
  return (
    <Toolbar>
      <Grid container direction="row">
        <Grid
          xs={3}
          sm={3}
          lg={1}
          xl={1}
          item
          sx={navigationStyles(menuOpen).toolbar.coomponents}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Grid
            sx={navigationStyles(menuOpen).toolbar.menuIcon}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={changeOpen}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          xs={9}
          sm={9}
          lg={11}
          xl={11}
          item
          justifyContent={"flex-end"}
        >
          <UserMenu />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default AuthorizedToolBar;
