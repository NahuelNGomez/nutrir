import * as React from "react";
import Box from "@mui/material/Box";
import Bar from "../navigation/Bar";
import { componentsStyles } from "@styles/index";
import { useAppCtx } from "../../src/contexts/store";
import { DrawerHeader } from "@styles/components/navigation/utils";

type props = {
  children: React.ReactNode;
};

const LoggedLayout: React.FC<props> = ({ children }) => {
  const {modeTheme} = useAppCtx();
  const {layoutStyles} = componentsStyles(modeTheme);
  return (
    <Box sx={layoutStyles.logged.container}>
      <Bar />
      <Box component="main" sx={layoutStyles.logged.body}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default LoggedLayout;