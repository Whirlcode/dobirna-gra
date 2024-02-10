import DrawerMain from "@app/components/gameScene/DrawerMain";

import GameScreenLayout from "@app/components/gameScene/GameScreenLayout";
import PlayerCard from "@app/components/gameScene/PlayerCard";
import PlayersLayout from "@app/components/gameScene/PlayersLayout";
import { Box } from "@mui/joy";

export default function GamePage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          alignItems: "center",
        }}
      >
        <GameScreenLayout />
        <DrawerMain />

        <PlayersLayout>
          <PlayerCard initialVal={60000} step={10}></PlayerCard>
        </PlayersLayout>
      </Box>
    </>
  );
}
