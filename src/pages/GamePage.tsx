import { Navigate } from "react-router-dom";

import { useAppSelector } from "@app/Store";
import DrawerMain from "@app/components/gameScene/DrawerMain";

import GameScreenLayout from "@app/components/gameScene/GameScreenLayout";

import PlayersLayout from "@app/components/gameScene/playerComp/PlayersLayout";
import { Box } from "@mui/joy";


export default function GamePage() {
  const isInLobby = useAppSelector(s => s.gameState.lobby?.Id) != null;


  return (
    <>
      {!isInLobby && <Navigate to="/" />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <GameScreenLayout />
        <DrawerMain />
        <PlayersLayout />
      </Box>
    </>
  );
}
