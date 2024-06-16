import colors from "@styles/colors";

const login = (theme: string) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    linkText: {
      textAlign: "right",
      color: colors(theme).primary,
      fontWeight: "500",
      fontSize: "13px",
      textTransform: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
    submitButton: {
      width: "100%",
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      color:"white"
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    helperText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "10px",
    },
    floatingText: {
      fontSize: "13px",
    },
  },
});

export default login;
