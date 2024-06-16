import { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import { MenuItem as MenuItemType } from "../../../src/types/navigation";
import { componentsStyles } from "@styles/index";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const MenuItem: FC<MenuItemType> = ({
  key,
  text,
  Icon,
  action,
  childrens,
  path,
}) => {
  const { menuOpen, modeTheme, setModalOpen } = useAppCtx();
  const { navigationStyles } = componentsStyles(modeTheme);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const router = useRouter();
  return (
    <div key={key}>
      <ListItem
        sx={navigationStyles(menuOpen).drawer.ListItem.parent}
        key={key}
      >
        <ListItemButton
          selected={router.pathname === path}
          sx={navigationStyles(menuOpen).drawer.ListItem.container}
          onClick={() =>
            childrens
              ? setOptionsOpen(!optionsOpen)
              : action && action(router, { setModalOpen })
          }
        >
          <Icon sx={navigationStyles(menuOpen).drawer.ListItem.icons} />
          {menuOpen && (
            <>
              <ListItemText
                sx={navigationStyles(menuOpen).drawer.ListItem.text}
                primary={text}
              />
              {childrens &&
                (optionsOpen ? (
                  <ExpandLess sx={{ color: "white" }} />
                ) : (
                  <ExpandMore sx={{ color: "white" }} />
                ))}
            </>
          )}
        </ListItemButton>
      </ListItem>
      {childrens && menuOpen && (
        <Collapse in={optionsOpen}>
          {childrens.map(({ key, text, Icon, action, path }) => (
            <ListItem
              key={key}
              sx={navigationStyles(menuOpen).drawer.ListItem.children_parent}
            >
              <ListItemButton
                selected={router.pathname === path}
                sx={navigationStyles(menuOpen).drawer.ListItem.children_item}
                onClick={() => action && action(router)}
              >
                <Icon
                  sx={navigationStyles(menuOpen).drawer.ListItem.children_icon}
                />
                <ListItemText
                  primary={text}
                  sx={navigationStyles(menuOpen).drawer.ListItem.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
      )}
    </div>
  );
};

export const MenuItemHeader: FC<MenuItemType> = ({
  key,
  text,
  Icon,
  action,
  path,
}) => {
  const { menuOpen, modeTheme } = useAppCtx();
  const { navigationStyles } = componentsStyles(modeTheme);
  const router = useRouter();

  return (
    <ListItem key={key} sx={navigationStyles(menuOpen).drawer.ListItem.parent}>
      <ListItemButton
        selected={router.pathname === path}
        sx={navigationStyles(menuOpen).drawer.ListItem.container}
        onClick={() => action && action(router)}
      >
        <Icon sx={navigationStyles(menuOpen).drawer.ListItem.icons} />
        {menuOpen && (
          <ListItemText
            sx={navigationStyles(menuOpen).drawer.ListItem.text}
            primary={text}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};
