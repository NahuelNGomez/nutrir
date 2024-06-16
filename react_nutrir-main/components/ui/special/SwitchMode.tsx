import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useAppCtx } from "../../../src/contexts/store";
import { componentsStyles } from "@styles/index";

const MaterialUISwitch = styled(Switch)(
  ({ theme }) =>
    componentsStyles(theme.palette.mode).uiComponentStyles.switchThemeStyles
);

const SwitchMode: React.FC<{}> = () => {
  const { modeTheme, updateTheme } = useAppCtx();

  const handleChange = () => {
    updateTheme(modeTheme == "dark" ? "light" : "dark");
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            checked={modeTheme === "dark"}
            onChange={handleChange}
          />
        }
        label={""}
      />
    </FormGroup>
  );
};

export default SwitchMode;
