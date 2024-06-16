const DayTime = (theme = "light") => ({
  card: {
    width: "100%",
    height: "90px",
    backgroundColor: theme == "light" ? "#013A6B" : "#121212",
    backgroundImage:
      theme == "light"
        ? "-webkit-linear-gradient(71deg, #7ec8c7 50%, #6fc2c1 50%)"
        : "-webkit-linear-gradient(73deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    pl: 2,
  },
  calendarIcon: {
    fontSize: "50px",
    color: theme === "light" ? "white" : "",
  },
  nameDay: {
    fontSize: "20px",
    color: theme === "light" ? "white" : "",
    fontWeight: "500",
    pl: 2,
  },
  actions: { p: 2 },
});

const days = (theme = "light") => ({
  container: { padding: "20px" },
  title: { paddingBottom: "15px" },
  dayTimeStyles: DayTime(theme),
});

export default days;
