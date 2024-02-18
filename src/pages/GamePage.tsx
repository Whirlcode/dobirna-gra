import { Navigate } from "react-router-dom";

import { useAppSelector } from "@app/Store";
import DrawerMain from "@app/components/gameScene/DrawerMain";

import GameScreenLayout from "@app/components/gameScene/GameScreenLayout";

import PlayerCard from "@app/components/gameScene/playerComp/PlayerCard";
import PlayersLayout from "@app/components/gameScene/playerComp/PlayersLayout";
import EmptyPlayerPLace from "@app/components/gameScene/playerComp/emptyPlayerPlace";
import { Box } from "@mui/joy";

export default function GamePage() {
  const gameLobby = useAppSelector((s) => s.userInfo.gameLobby);
  const isInLobby = useAppSelector(s => s.gameState.lobby?.Id) != null;
  const { amMaster } = useAppSelector(s => s.gameState);

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

        <PlayersLayout>

          {gameLobby.map((player) => {
            if (!player.isGameMaster) {
              return (
                <>
                  <PlayerCard
                    key={player.id}
                    initialVal={60000}
                    step={900}
                    playerName={player.name}
                    playerImg={player.img}
                  />
                </>
              );
            }
          })}
          {amMaster && <EmptyPlayerPLace />}
        </PlayersLayout>
      </Box>
    </>
  );
}
