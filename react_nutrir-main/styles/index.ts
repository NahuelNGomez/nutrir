import layout from "./components/layout";
import navigation from "./components/navigation";
import ui from "./components/ui";
import content from "./components/ui/content";
import dashboard from "./pages/dashboard";
import days from "./pages/days";
import edit from "./pages/edit";
import login from "./pages/login";
import profile from "./pages/profile";
import recoveryAccount from "./pages/recoveryAccount";
import register from "./pages/register";
import stats from "./pages/stats";
import survey from "./pages/survey";

export const pagesStyles = (theme = "light") => ({
  loginStyles: login(theme),
  registerStyles: register(theme),
  recoveryAccountStyles: recoveryAccount(theme),
  dashboardStyles: dashboard(theme),
  editStyles: edit(theme),
  profileStyles: profile(theme),
  daysStyles: days(theme),
  surveyStyles: survey(theme),
  statsStyles: stats(theme)
});

export const componentsStyles = (theme = "light") => ({
  navigationStyles: (open = false) => navigation(theme, open),
  layoutStyles: layout(theme),
  uiComponentStyles: ui(theme),
  contentStyles: content(theme),
});
