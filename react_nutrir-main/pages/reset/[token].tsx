import { Card, Grid, Slide } from "@mui/material";
import { NextPage } from "next";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../src/contexts/store";
import UnloggedLayout from "@components/layouts/UnloggedLayout";
import PasswordCart from "../../components/recovery/PasswordCart";
import { useRouter } from "next/router";

const ChangePassword: NextPage = () => {
  const { modeTheme } = useAppCtx();
  const router = useRouter();
  const { recoveryAccountStyles } = pagesStyles(modeTheme);

  
  return (
    <UnloggedLayout>
      <Grid
        flexDirection={"column"}
        xs={12}
        sm={8}
        lg={5}
        xl={4}
        sx={recoveryAccountStyles.container}
      >
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Card sx={recoveryAccountStyles.cardContainer}>
            <PasswordCart token={router.query.token}/>
          </Card>
        </Slide>
      </Grid>
    </UnloggedLayout>
  );
};

export default ChangePassword;