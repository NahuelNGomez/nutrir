import colors from "@styles/colors";

const InfoCard = (theme = "light") => ({
  container: {
    mb: 1,
    p: { xs: 3, sm: 3, md: 3, lg: 1.5, xl: 1.5 },
    borderRadius: "10px",
    height: { xs: "25%", sm: "25%", md: "55%", lg: "18%", xl: "23%" },
    backgroundImage:
      theme === "light"
        ? "-webkit-linear-gradient(71deg, #7ec8c7 50%, #6fc2c1 50%)"
        : "-webkit-linear-gradient(60deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
  },
  cardTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "17px",
    pb: 0.5,
    color: "white",
  },
  infoSeccion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    pt: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
  },
  avatar: { width: 40, height: 40, backgroundColor: "grey" },
  userName: { pl: 0, fontWeight: "Bold", fontSize: "18px" },
  userInfo: {
    pl: 1,
    fontSize: "13px",
    fontWeight: "500",
  },
  
});

const MerenderoCards = (theme = "light") => ({
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
    pb: 2,
  },
  card: {
    p: 2,
    mb: 1,
    borderLeft: `4px solid ${colors(theme).primary}`,
    color: "gray"
  },
  titleCard: { color: "gray" },
  cardActive: {
    p: 2,
    mb: 1,
    borderLeft: `4px solid ${colors(theme).primary}`,
    backgroundColor: "rgb(77, 135, 135)",
    color: 'white'
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    mt: { xs: 1, sm: 1, md: 0, lg: 0, xl: 0 },
  },
  button: {
    color: colors(theme).primary,
    fontWeight: "bold",
    cursor: "pointer",
    pr: 2,
  },
});

const Form = (theme = "light") => ({
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
  },
  fields: {
    padding: "3px",
  },
  textInput: {
    marginTop: "10px",
  },
  seccionTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
    pt: 1,
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  submiButton: {
    borderRadius: "32px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    width: { xs: "100%", sm: "100%", md: "80%", lg: "40%", xl: "40%" },
    margin: "10px",
    color: "white"
  },
  circularProgress: {
    marginLeft: "5px",
  },
  errorMessage: {
    paddingTop: "15px",
  },
  alertComponent: {
    justifyContent: "center",
    mb: 3
  },
});

const PassForm = (theme = "light") => ({
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
  },
  fields: {
    padding: "5px",
  },
  textInput: {
    marginTop: "10px",
  },
  seccionTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "20px",
    pt: 1,
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  submiButton: {
    borderRadius: "32px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    width: { xs: "100%", sm: "100%", md: "80%", lg: "40%", xl: "40%" },
    // margin: "10px",
    color: "white"
  },
  circularProgress: {
    marginLeft: "5px",
  },
  errorMessage: {
    paddingTop: "15px",
  },
  alertComponent: {
    justifyContent: "center",
  },
});

const profile = (theme = "light") => ({
  container: { padding: "20px"},
  title: { paddingBottom: "15px", fontSize: "22px", fontWeight: "700" },
  firstContainer: { display: "flex", flexDirection: "column"},
  secondContainer: {
    pl: { xs: 2, sm: 2, md: 4, lg: 4, xl: 4 },
    pr: { xs: 2, sm: 2, md: 4, lg: 4, xl: 4 },
    pb: { xs: 5, sm: 5, md: 4, lg: 3, xl: 3 },
    pt: { xs: 2, sm: 2, md: 4, lg: 2, xl: 2 },
    width: { xs: "100%", sm: "100%", md: "100%", lg: "99%", xl: "99%" },
    ml: { xs: 0, sm: 0, md: 0, lg: 1, xl: 1 },
    borderRadius: "10px",
  },
  thirContainer: {
    pl: { xs: 2, sm: 2, md: 4, lg: 4, xl: 4 },
    pr: { xs: 2, sm: 2, md: 4, lg: 4, xl: 4 },
    pb: { xs: 2, sm: 2, md: 4, lg: 2, xl: 2 },
    pt: { xs: 2, sm: 2, md: 4, lg: 2, xl: 2 },
    width: { xs: "100%", sm: "100%", md: "100%", lg: "99%", xl: "99%" },
    ml: { xs: 0, sm: 0, md: 0, lg: 1, xl: 1 },
    borderRadius: "10px",
    mt: 1
  },
  infoCardStyles: InfoCard(theme),
  merenderosCardsStyles: MerenderoCards(theme),
  formStyles: Form(theme),
  passFormStyles: PassForm(theme),
});

export default profile;
