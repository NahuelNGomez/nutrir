import SwitchMode from "@components/ui/special/SwitchMode";
import { Grid, Toolbar } from "@mui/material";
import { componentsStyles } from "@styles/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppCtx } from "../../src/contexts/store";

const UnauthorizedToolBar: FC<{}> = () => {
  const { modeTheme, menuOpen } = useAppCtx();
  const router = useRouter();
  const { navigationStyles } = componentsStyles(modeTheme);
  return (
    <Toolbar>
      <Grid container direction="row">
        <Grid
          xs={12}
          item
          sx={navigationStyles(menuOpen).toolbar.coomponents}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          {router.pathname !== "/login" ? (
            <Image
              src={"/images/ui/NUTRIR logo-03.png"}
              width={70}
              height={50}
              style={navigationStyles(menuOpen).toolbar.icon}
              onClick={() => router.push('/')}
            />
          ) : <Grid></Grid>}
          <SwitchMode />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default UnauthorizedToolBar;
