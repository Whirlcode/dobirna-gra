import { Outlet } from "react-router-dom";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import DefaultBackground from "@app/components/base/Background";
import ThemeToggle from "@app/components/base/ThemeToggle";

import NotificationCenter from "@app/features/notifications/NotificationCenter";
import theme from "@app/components/base/theme";
import { Box } from "@mui/joy";
import { useAppSelector } from "@app/Store";
import { ConnectionState } from "@app/features/gameState/gameStateSlice";
import PendingConnectionPage from "@app/pages/PendingConnectionPage";

export default function App() {
  const connectionState = useAppSelector(s => s.gameState.connectionState)
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <DefaultBackground />
      <ThemeToggle />
      <Box sx={{ userSelect: 'none', height: "100%" }}>
        {connectionState === ConnectionState.CONNECTING
          ?
          <PendingConnectionPage />
          :
          <Outlet />}
      </Box>
      <NotificationCenter />
    </CssVarsProvider>
  );
}
