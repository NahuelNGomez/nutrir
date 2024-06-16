import colors from "@styles/colors";


const bar = (theme = "light") => ({
  unauthorizedAppBar: {
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  menuButton: {
    display: {
      sm: "inline",
      xs: "inline",
      md: "inline",
      xl: "none",
      xxl: "none",
    },
  },
  profileItem: {
    backgroundColor: colors("light").primary,
    marginTop: "-10px",
    padding: "15px",
  },
  avatarName: {
    width: 60,
    height: 60,
    color: "white",
  },
  avatarReggard: {
    color: "white",
  },
  toolBarComponents: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    marginRight: "8px",
  },
  isMobileVisible: {
    display: {
      sm: "block",
      xs: "block",
      md: "block",
      xl: "none",
      xxl: "none",
    },
  },
  isDesktopVisible: {
    display: {
      sm: "none",
      xs: "none",
      md: "none",
      xl: "block",
      xxl: "block",
    },
  },
});

const toolbar = () => ({
  coomponents: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    p:1
  },
  menuIcon: {
    display: {
      sm: "inline",
      xs: "inline",
      md: "none",
      xl: "none",
      xxl: "none",
    },
  },
  icon:{
    cursor:"pointer",
  }
});

const drawer = (open: boolean, theme: string) => ({
  drawerDesktop: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      backgroundColor: theme == "light" ? colors('light').primary : "",
    },
    display: {
      sm: "none",
      xs: "none",
      md: "inline",
      xl: "inline",
      xxl: "inline",
    },
  },
  drawerMobile: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "69%",
      backgroundColor: theme == "light" ? colors('light').primary  : "",
    },
    display: {
      sm: "inline",
      xs: "inline",
      md: "none",
      xl: "none",
      xxl: "none",
    },
  },
  DrawerHeader: {
    display: "flex",
    justifyContent: open ? "space-between" : "center",
    alignItems: "flex-start",
    padding: "10px",
    paddingTop: "20px",
  },
  drawerHeaderIcons: {
    logoIcon: {
      cursor: "pointer",
    },
    menuIcon: {
      color: "white",
    },
  },
  ListItem: {
    parent: {
      padding: open ? "" : "6px",
      paddingLeft: open ? "10px" : "",
      paddingRight: open ? "10px" : "",
    },
    children_parent: { ml: 1, height: 40 },
    children_item: {
      paddingTop: "3px",
      paddingBottom: "3px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    children_icon: { height: "0.9rem", color: "white" },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    icons: {
      color: "white",
      fontSize: "22px",
    },
    text: { color: "white", marginLeft: "10px" },
    text_separator: {
      textAlign: "left",
      paddingLeft: "12px",
      marginTop: "15px",
      marginBottom: "5px",
      color: "white",
      fontWeight: "bold",
      fontSize: "16px",
    },
    ListItemContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: "10px",
    },
  },
  exitContainer: {
    width: "100%",
    padding: "8px",
    mb:1
  },
  exitButton: {
    width: "100%",
    borderRadius: "30px",
    color: "#5a9a9a",
    backgroundColor: "#7cf6a3",
    borderColor: "#7cf6a3",
    fontWeight: "bold",
    textTransform: "none",
    pt: open ? "6px" :"10px",
    pb: open ?"6px" : "10px",
    fontSize: "15px",
    alignSelf:"center",
    minWidth:"0px"
  },
});

const navigation = (theme = "light", open = false) => ({
  drawer: drawer(open, theme),
  bar: bar(theme),
  toolbar: toolbar(),
});

export default navigation;
