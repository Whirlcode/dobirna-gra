import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";

import { RouterProvider } from "react-router-dom";
import { router } from "@app/Router";

import DefaultBackground from "@app/components/Background";
import ThemeToggle from "@app/components/ThemeToggle";
import { useEffect } from "react";

import RoomRPC from "@app/core/GameRPC";
import NotificationCenter from "./features/notifications/NotificationCenter";

export default function App() {
  useEffect(() => {
    RoomRPC.connect(() => {
      RoomRPC.refresh_status();
    });
  }, []);

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
      <RouterProvider router={router} />
      <NotificationCenter />
    </CssVarsProvider>
  );
}
