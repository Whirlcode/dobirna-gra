import { Outlet } from "react-router-dom";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import DefaultBackground from "@app/components/base/Background";
import ThemeToggle from "@app/components/base/ThemeToggle";

import NotificationCenter from "@app/features/notifications/NotificationCenter";
import theme from "@app/components/base/theme";

export default function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <DefaultBackground />
      <ThemeToggle />
      <Outlet/>
      <NotificationCenter />
    </CssVarsProvider>
  );
}
