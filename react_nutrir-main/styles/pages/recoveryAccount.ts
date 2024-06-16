import colors from "@styles/colors";

const EmailCart = (theme = "light") => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    titleCard:{
      fontSize:"1.5rem",
      fontWeight:"700",
      pt:1,
      pb:1
    },
    submitbutton:{
      borderRadius:"30px",
      color:"white"
    },
    linkBack:{
      pt:3,
      color:colors('light').primary,
      textDecoration:"underline",
      cursor:"pointer"
    }
  },
});



const PasswordCart = (theme = "light") => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    titleCard:{
      fontSize:"1.5rem",
      fontWeight:"700",
      pt:1,
      pb:1
    },
    submitbutton:{
      borderRadius:"30px",
      color:"white",
      mb:1
    },
    linkBack:{
      pt:3,
      color:colors('light').primary,
      textDecoration:"underline",
      cursor:"pointer"
    }
  },
});

const recoveryAccount = (theme = "light") => ({
  container: { p: "10px" },
  cardContainer:{p:{xs:"2px",sm:"18px",lg:"24px",xl:"24px"}},
  emailCartStyles: EmailCart(theme),
  passwordCartStyles: PasswordCart(theme),
});

export default recoveryAccount;
