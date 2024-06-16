const layout = (theme = "light") => ({
  logged: {
    container: { display: "flex" },
    body: {
      backgroundColor: theme === "light" ? "#f7f8fa" : "",
      minHeight: "100vh",
      width: "100%",
    },
  },
  unlogged: {
    page: {
      backgroundColor: theme == "light" ? "#013A6B" : "#121212",
      backgroundImage:
        theme == "light"
          ? "-webkit-linear-gradient(25deg, #ffffff 50%, #f1f3fa 50%)"
          : "-webkit-linear-gradient(25deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
      minHeight: "100vh",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "100vh",
    },
    footer_image: { filter: theme == "light" ? "saturate(100%)" : "" },
  },
});

export default layout;
