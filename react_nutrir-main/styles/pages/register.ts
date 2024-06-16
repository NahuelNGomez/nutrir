const register = (theme: string) => ({
  container: { padding: "10px" },
  title: {
    textAlign: "center",
    fontWeight: "400",
  },
  utils: {
    container: {
      width: "98%",
    },
    fields: {
      padding: "5px",
    },
    textInput: {
      marginTop: "15px",
    },
    selectInput: { width: "100%", marginTop: "20px" },
    selectInputLabel: { top: "-10px" },
    submitButton: {
      width: "100%",
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
});

export default register;
