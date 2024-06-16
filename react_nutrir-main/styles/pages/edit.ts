const edit1 = (theme = "light") => ({
  container: { padding: "20px" },
  title: { paddingBottom: "15px", fontSize: "22px", fontWeight: "700" },
  daysContainerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  utils: {
    daysButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "auto",
      pl: 4,
      pr: 4,
      color: "white",
    },
    textInput: {
      marginTop: "15px",
    },
    submitButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "40%",
      margin: "15px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    AlertMessage: { justifyContent: "center" },
  },
  form: {
    title: {
      textAlign: "center",
      fontWeight: "400",
    },
    fields: {
      padding: "5px",
    },
  },
});

const ComedorForm = (theme = "light") => ({
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
  },
  fields: {
    padding: "5px",
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  utils: {
    textInput: {
      marginTop: "10px",
    },
    submitButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "40%",
      marginBottom: "15px",
      color: "white"
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    AlertMessage: { justifyContent: "center" },
  },
  form: {
    title: {
      textAlign: "center",
      fontWeight: "400",
    },
    fields: {
      padding: "5px",
    },
  },
})

const DaysForm = (theme = 'light') => ({
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
  },
  actions: {
    p: 2,
    color:
      theme == "light"
       ? 'black'
       : 'white'
  },
  details: {
    backgroundColor: theme == "light" ? '' : '#121212',  
    backgroundImage:
      theme == "light"
        ? "-webkit-linear-gradient(71deg, #ffffff 50%, #ffffff 50%)"
        : "-webkit-linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)",
  },
  utils: {
    daysButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "40%",
      // marginTop: "15px",
      marginBottom: 3,
      color: "white"
    },
    errorMessage: {
      paddingTop: "15px",
      ml: 3,
      mr: 3,
      mb: 3
    },
    alertComponent: {
      justifyContent: "center",
      ml: 3,
      mr: 3,
      mb: 3
    },
  }
})



const edit = (theme = "light") => ({
  container: { padding: "20px" },
  title: { paddingBottom: "15px", fontSize: "22px", fontWeight: "700" },
  comedorForm: ComedorForm(theme),
  daysForm: DaysForm(theme),
  daysContainerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  utils: {
    daysButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "auto",
      pl: 4,
      pr: 4,
      color: "white",
    },
  }
});

export default edit;
