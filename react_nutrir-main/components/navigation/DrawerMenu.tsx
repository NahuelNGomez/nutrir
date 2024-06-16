import { Drawer as DrawerMobile } from "@mui/material";
import { FC } from "react";
import { componentsStyles } from "@styles/index";
import DrawerMenuItems from "@components/ui/contents/DrawerMenuItems";
import { Drawer as DrawerDesktop } from "@styles/components/navigation/utils";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  open: boolean;
  onClose(): void;
};

const DrawerMenu: FC<props> = ({ open, onClose }) => {
  const { modeTheme, menuOpen } = useAppCtx();
  const { navigationStyles } = componentsStyles(modeTheme);

  return (
    <>
      <DrawerMobile
        anchor={"left"}
        open={open}
        onClose={onClose}
        sx={navigationStyles(menuOpen).drawer.drawerMobile}
      >
        <DrawerMenuItems />
      </DrawerMobile>
      <DrawerDesktop
        sx={navigationStyles(menuOpen).drawer.drawerDesktop}
        variant="permanent"
        open={open}
      >
        <DrawerMenuItems />
      </DrawerDesktop>
    </>
  );
};

export default DrawerMenu;
