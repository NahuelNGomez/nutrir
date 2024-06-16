const Cards = (theme = "light") => ({
  container: {
    width: "100%",
    height: "140px",
    backgroundColor: theme == "light" ? "#013A6B" : "#121212",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    pl: 2,
  },
  dark_bg:
    "-webkit-linear-gradient(71deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
  actions: { justifyContent: "center", paddingBottom: "20px" },
  button: {
    width: "70%",
    borderRadius: "30px",
    color: "white",
  },
});

const dashboard = (theme = "light") => ({
  container: { padding: "20px" },
  title: { paddingBottom: "10px",fontSize:"22px",fontWeight:"700" },
  CardsStyles: Cards(theme),
});

export default dashboard;
