import { ExitToApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import navigation from "@styles/components/navigation/index";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppCtx } from "../../../src/contexts/store";

const LogoutButton: FC<{}> = () => {
  const router = useRouter();
  const { menuOpen, modeTheme } = useAppCtx();
  const drawerStyles = navigation(modeTheme, menuOpen).drawer;
  return (
    <Button
      sx={drawerStyles.exitButton}
      onClick={() => router.push("/api/logout")}
    >
      {menuOpen ? (
        <>
          <ExitToApp sx={{ mr: 1 }} />
          Cerrar Sesión
        </>
      ) : (
        <ExitToApp />
      )}
    </Button>
  );
};

export default LogoutButton;
