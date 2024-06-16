import LoggedLayout from "@components/layouts/LoggedLayout";
import { Card, Divider, Grid, Typography } from "@mui/material";
import { pagesStyles } from "@styles/index";
import { NextPage } from "next";
import { useAppCtx } from "../src/contexts/store";
export { getServerSideProps } from "../src/serverSideProps";
import InfoCard from "../components/profile/components/InfoCard";
import MerenderoCards from "../components/profile/components/MerenderoCards";
import UserForm from "../components/profile/components/UserForm";
import PassForm from "../components/profile/components/PassForm";

const Profile: NextPage = () => {
  const { modeTheme } = useAppCtx();

  const { profileStyles } = pagesStyles(modeTheme);

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={profileStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={profileStyles.title}>
            PERFIIL DE USUARIO
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: -2 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              sx={profileStyles.firstContainer}

            >
              <InfoCard />
              <Card sx={profileStyles.secondContainer}>
                <UserForm />
              </Card>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card sx={profileStyles.secondContainer}>
                <PassForm />
              </Card>
              <Card sx={profileStyles.thirContainer}>
                <MerenderoCards />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LoggedLayout>
  );
};

export default Profile;
