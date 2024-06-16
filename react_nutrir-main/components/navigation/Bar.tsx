import { componentsStyles } from "@styles/index";
import { AppBar, Grid } from "@mui/material";
import { useAppCtx } from "../../src/contexts/store";
import { CustomAppBar } from "@styles/components/navigation/utils";
import DrawerMenu from "./DrawerMenu";
import AuthorizedToolBar from "./ToolBarAuthorized";
import UnauthorizedToolBar from "./ToolbarUnauthorized";
import { FC } from "react";

const Bar: FC<{}> = () => {
  const { user, menuOpen, setMenuOpen, modeTheme } = useAppCtx();

  const { navigationStyles } = componentsStyles(modeTheme);
  return (
    <>
      {user?.logged && (
        <>
          <Grid sx={navigationStyles(menuOpen).bar.isDesktopVisible}>
            <CustomAppBar position="fixed" open={menuOpen}>
              <AuthorizedToolBar changeOpen={() => setMenuOpen(!menuOpen)} />
            </CustomAppBar>
          </Grid>
          <Grid sx={navigationStyles(menuOpen).bar.isMobileVisible}>
            <AppBar position="fixed">
              <AuthorizedToolBar changeOpen={() => setMenuOpen(!menuOpen)} />
            </AppBar>
          </Grid>
          <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(!menuOpen)} />
        </>
      )}
      {!user?.logged && (
        <AppBar
          position="static"
          sx={navigationStyles(menuOpen).bar.unauthorizedAppBar}
        >
          <UnauthorizedToolBar />
        </AppBar>
      )}
    </>
  );
};

export default Bar;
