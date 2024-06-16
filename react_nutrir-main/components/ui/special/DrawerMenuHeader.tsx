import { DrawerHeader } from "@styles/components/navigation/utils";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppCtx } from "../../../src/contexts/store";
import { componentsStyles } from "@styles/index";
import { FC } from "react";
import { IconButton } from "@mui/material";

const DrawerMenuHeader: FC<{}> = () => {
  const { menuOpen, setMenuOpen, modeTheme } = useAppCtx();
  const { navigationStyles } = componentsStyles(modeTheme);
  return (
    <DrawerHeader sx={navigationStyles(menuOpen).drawer.DrawerHeader} onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() =>  setMenuOpen(false)}>
      {menuOpen ? (
        <>
          <img
            src={"/images/ui/logo-icon.png"}
            width={35}
            style={navigationStyles(menuOpen).drawer.drawerHeaderIcons.logoIcon}
          />
          <img src={"/images/ui/nutrir-app.png"} width={120} />
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => setMenuOpen(false)}
            sx={navigationStyles(menuOpen).drawer.drawerHeaderIcons.menuIcon}
          >
            <MenuIcon />
          </IconButton>
        </>
      ) : (
        <img
          src={"/images/ui/logo-icon.png"}
          width={35}
          style={navigationStyles(menuOpen).drawer.drawerHeaderIcons.logoIcon}
          onClick={() => setMenuOpen(true)}
        />
      )}
    </DrawerHeader>
  );
};

export default DrawerMenuHeader;
