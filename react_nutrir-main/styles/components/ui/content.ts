import colors from "@styles/colors";

const UserMenu = (theme = "light") => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: {
      xs: "flex-end",
      sm: "flex-end",
      lg: "flex-end",
      xl: "flex-end",
    },
    cursor: "pointer",
    alignItems: "center",
  },
  avatar: { width: 36, height: 36, backgroundColor: colors('light').primary },
  text_content: {
    pr: 1,
    display: {
      sm: "none",
      xs: "none",
      md: "block",
      xl: "block",
      xxl: "block",
    },
  },
  text: { fontSize: "16px", fontWeight: "500", marginBottom: "-2px" },
  menu: {
    elevation: 0,
    sx: {
      ml:1,
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  },
  menu_list: { padding: "10px" },
  menu_text: { sx: { fontSize: "13px" } },
});

const content = (theme = "light") => ({
  userMenuStyles: UserMenu(theme),
});

export default content;
