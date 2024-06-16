import Bar from "@components/navigation/Bar";
import { Grid } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { useAppCtx } from "../../src/contexts/store";
import { componentsStyles } from "@styles/index";

type props = {
  children: ReactNode;
};

const UnloggedLayout: FC<props> = ({ children }) => {
  const { modeTheme } = useAppCtx();

  const {layoutStyles} = componentsStyles(modeTheme);
  return (
    <Grid sx={layoutStyles.unlogged.page}>
      <Grid sx={layoutStyles.unlogged.container}>
        <Bar />
        <Grid container justifyContent={"center"}>
          {children}
        </Grid>
        <Grid>
          <img
            src={"/organica.png"}
            style={layoutStyles.unlogged.footer_image}
            width={150}
            height={75}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UnloggedLayout;
