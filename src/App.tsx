import { Outlet } from "react-router-dom";

import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";

import DefaultBackground from "@app/components/base/Background";
import ThemeToggle from "@app/components/base/ThemeToggle";

import NotificationCenter from "@app/features/notifications/NotificationCenter";

export default function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {},
        }}
      />
      <DefaultBackground />
      <ThemeToggle />
      <Outlet/>
      <NotificationCenter />
    </CssVarsProvider>
  );
}
