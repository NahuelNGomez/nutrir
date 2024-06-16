import { textAlign } from "@mui/system";
import colors from "@styles/colors";

const SwitchTheme = (theme = "light") => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: colors("light").secondary,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
});

const MerenderosModal = (theme = "light") => ({
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "100%", sm: "100%", lg: "60%", xl: "50" },
    height: { xs: "100%", sm: "100%", lg: "80%", xl: "60%" },
    maxHeight: { xs: "100%", sm: "100%", lg: "80%", xl: "60%" },
    overflow: "auto",
    overflowX: "hidden",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: { xs: 2, sm: 2, lg: 4, xl: 4 },
    borderRadius: { xs: 0, sm: 0, lg: 2, xl: 2 },
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  headerContainer: { mb: 4 },
  closeIcon: { cursor: "pointer", fontSize: "20px", fontWeight: "600" },
  searchInput: { width: "100%" },
  borderSelected: `1px solid ${colors(theme).offset_primary}`,
  borderUnselected: "1px rgba(0, 0, 0, 0.4) solid",
  item: {
    borderRadius: 1,
    mt: 1,
    p: 1,
    ":hover": {
      backgroundColor: "transparent",
      borderRadius: "3px",
      border: `1px solid ${colors(theme).offset_primary}`,
      boxShadow: "none",
      color: `${colors(theme).offset_primary}`,
    },
  },
  colorSelected: `${colors(theme).offset_primary}`,
  colorUnselected: "#000000DE",
  itemIcon: { ml: 1 },
  primaryText: { fontWeight: "bold", textTransform: "uppercase", mb: 1 },
});

const LoginModal = (theme = "light") => ({
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "100%", sm: "100%", lg: "30%", xl: "30%" },
    height: { xs: "100%", sm: "100%", lg: "30%", xl: "30%" },
    maxHeight: { xs: "100%", sm: "100%", lg: "80%", xl: "60%" },
    overflow: "auto",
    overflowX: "hidden",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: { xs: 2, sm: 2, lg: 4, xl: 4 },
    borderRadius: { xs: 0, sm: 0, lg: 2, xl: 2 },
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  headerContainer: {
    mt: { xs: "50%", sm: "50%", lg: "0", xl: "0" },
    mb: 4,
    textAlign: { xs: "center", sm: "center", lg: "left", xl: "left" },

  },
  headerTitle: {
    fontSize: "18px", 
    fontWeight: "600", 
    mb: 1.5, 
    width: '100%'
  },
  headerSubTitle: {
    fontSize: "16px",
    width: '100%'
  },
  closeIcon: { cursor: "pointer", fontSize: "20px", fontWeight: "600" },
  searchInput: { width: "100%" },
  borderSelected: `1px solid ${colors(theme).offset_primary}`,
  borderUnselected: "1px rgba(0, 0, 0, 0.4) solid",
  item: {
    borderRadius: 1,
    mt: 1,
    p: 1,
    ":hover": {
      backgroundColor: "transparent",
      borderRadius: "3px",
      border: `1px solid ${colors(theme).offset_primary}`,
      boxShadow: "none",
      color: `${colors(theme).offset_primary}`,
    },
  },
  colorSelected: `${colors(theme).offset_primary}`,
  colorUnselected: "#000000DE",
  itemIcon: { ml: 1 },
  primaryText: { fontWeight: "bold", textTransform: "uppercase", mb: 1 },
  utils: {
    completeButton: {
      width: { xs: "100%" },
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      border: '1px solid #40a39b',
      color: "#ffffff",
    }
  }
});

const ui = (theme = "light") => ({
  loginModalStyles: LoginModal(theme),
  merenderosModalStyles: MerenderosModal(theme),
  switchThemeStyles: SwitchTheme(theme),
});

export default ui;
