import { Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import { componentsStyles } from "@styles/index";
import { HeaderMenuList, MenuList } from "../../../src/contents/menuList";
import { useAppCtx } from "../../../src/contexts/store";
import { FC } from "react";
import LogoutButton from "../special/LogoutButton";
import { MenuItem, MenuItemHeader } from "../special/DrawerMenuItem";
import DrawerMenuHeader from "../special/DrawerMenuHeader";

const DrawerMenuItems: FC<{}> = () => {
  const { menuOpen, modeTheme,setMenuOpen } = useAppCtx();
  const { navigationStyles } = componentsStyles(modeTheme);

  return (
    <>
      <DrawerMenuHeader />
      <Grid sx={navigationStyles(menuOpen).drawer.ListItem.ListItemContainer} onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() =>  setMenuOpen(false)}>
        <List>
          {HeaderMenuList.map(({ key, text, Icon, action, path }, index) => (
            <MenuItemHeader
              key={key}
              text={text}
              Icon={Icon}
              action={action}
              path={path}
            />
          ))}
          {menuOpen && (
            <Typography
              sx={navigationStyles(menuOpen).drawer.ListItem.text_separator}
            >
              COMEDOR
            </Typography>
          )}
          {MenuList.map(({ key, text, Icon, action, childrens, path }) => (
            <MenuItem
              key={key}
              text={text}
              Icon={Icon}
              action={action}
              path={path}
              childrens={childrens}
            />
          ))}
        </List>
        <Grid sx={navigationStyles(menuOpen).drawer.exitContainer}>
          <LogoutButton />
        </Grid>
      </Grid>
    </>
  );
};

export default DrawerMenuItems;
