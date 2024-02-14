import { useAppSelector } from "@app/Store";
import DrawerMain from "@app/components/gameScene/DrawerMain";

import GameScreenLayout from "@app/components/gameScene/GameScreenLayout";
import PlayerCard from "@app/components/gameScene/PlayerCard";
import PlayersLayout from "@app/components/gameScene/PlayersLayout";
import { Box } from "@mui/joy";

export default function GamePage() {
  const gameLobby = useAppSelector((s) => s.userInfo.gameLobby);
  return (
    <>
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
        </PlayersLayout>
      </Box>
    </>
  );
}
