import { Card, Grid, Slide } from "@mui/material";
import { NextPage } from "next";
import EmailCart from "../components/recovery/EmailCart";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import UnloggedLayout from "@components/layouts/UnloggedLayout";

const ResetPassword: NextPage = () => {
  const { modeTheme } = useAppCtx();

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
            <EmailCart />
          </Card>
        </Slide>
      </Grid>
    </UnloggedLayout>
  );
};

export default ResetPassword;
