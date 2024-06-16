import { fontWeight } from "@mui/system";

const Stepper = (theme = "light") => ({
  container: {
    padding: "20px",
    minHeight: {
      xs: "fit-content",
      sm: "fit-content",
      md: "fit-content",
      lg: "600px",
      xl: "600px",
    },
  },
  card: {
    height: "100%",
    borderRadius: "5px",
    p: 2,
  },
  title: {
    fontWeight: "700",
    fontSize: "1rem",
    mb: 1,
  },
  subtitle: {
    mt: "1rem",
    mb: "1rem",
  },
  stepTitle: {
    fontWeight: "700",
  },
  buttons: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    mb: { xs: 1, sm: 1, lg: 0, xl: 0 },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "1px solid #40a39b",
    color: "#40a39b",
  },
});

const FormPanel = (theme = "light") => ({
  title: {
    mt: 3,
    fontWeight: "700",
    fontSize: "1rem",
  },
  subtitle: {
    mt: 1,
  },
});

const FormPanelMobile = (theme = "light") => ({
  title: {
    mt: 0,
    fontWeight: "700",
    fontSize: "1rem",
  },
  subtitle: {
    mt: 1,
  },
});

const DishSelection = (theme = "ligh") => ({
  container: {
    padding: "20px",
  },
  title: {
    fontWeight: "700",
  },
});

const DateTable = (theme = "light") => ({
  container: {
    p: { xs: 0, sm: 0, md: 2, lg: 2, xl: 2 },
    mt: { xs: 2, sm: 2 },
  },
  utils: {
    completeButton: {
      width: { xs: "100%" },
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #40a39b",
      color: "#ffffff",
    },
    uncompleteButton: {
      width: { xs: "100%" },
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      backgroundColor: "transparent",
      border: "1px solid #40a39b",
      color: theme == "light" ? "#121212" : "white",
    },
  },
});

const GuestsStep = (theme = "light") => ({
  button: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px 0",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "1px solid #40a39b",
    color: "#40a39b",
    mt: { xs: 2, sm: 2, lg: 4, xl: 4 },
    ":disabled": {
      backgroundColor: theme === "light" ? "#ededed" : "transparent",
      border: theme === "light" ? "none" : "1px solid #9d9ba2",
    },
  },
});

const DrinkStep = (theme = "light") => ({
  button: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "1px solid #40a39b",
    color: "#40a39b",
    mt: { xs: 2, sm: 2, lg: 4, xl: 4 },
  },
});

const MealStep = (theme = "light") => ({
  button: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "1px solid #40a39b",
    color: "#40a39b",
    mt: { xs: 2, sm: 2, lg: 4, xl: 4 },
  },
});

const IngredientsPanel = (theme = "light") => ({
  container: {
    box: {
      backgroundColor: "#40a39b",
    },
    details: {
      pl: { xs: 0, sm: 0, md: 0 },
      pr: { xs: 0, sm: 0, md: 0 },
      backgroundColor: theme == "light" ? "" : "#121212",
      backgroundImage:
        theme == "light"
          ? "-webkit-linear-gradient(71deg, #ffffff 50%, #ffffff 50%)"
          : "-webkit-linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)",
    },
  },
  compoundCard: {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    descriptionContainer: {
      alignItems: "center",
      p: { xs: 0, sm: 0, md: 0, lg: 1, xl: 1 },
    },
    imageContainer: {
      ml: { xs: 3, sm: 3, md: 2, lg: 2, xl: 2 },
    },
    primaryText: {
      color: theme == "light" ? "" : "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      ml: { xs: 0.5, sm: 0.5, md: 2, lg: 2, xl: 2 },
    },
    quantityContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    secondaryText: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    },
    errorMsg: {
      color: "red",
    },
  },
  simpleCard: {
    container: {
      backgroundColor: "#40a39b",
      display: "flex",
      flexDirection: "row",
      p: 0.5,
      borderRadius: "5px",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "0.5rem",
    },
    title: {
      ml: 3,
    },
  },
});

const survey = (theme = "light") => ({
  container: { p: { xs: 0.5, sm: 0.5, md: 0.5, lg: 1, xl: 1 } },
  title: {
    paddingBottom: "10px",
    paddingTop: "20px",
    fontSize: "22px",
    fontWeight: "700",
  },
  dataTable: DateTable(theme),
  dishSelection: DishSelection(theme),
  formPanel: FormPanel(theme),
  formPanelMobile: FormPanelMobile(theme),
  stepper: Stepper(theme),
  guests: GuestsStep(theme),
  drinks: DrinkStep(theme),
  mealStep: MealStep(theme),
  ingredientsPanel: IngredientsPanel(theme),
});

export default survey;
