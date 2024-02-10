import DrawerMain from "@app/components/DrawerMain";

import GameScreenLayout from "@app/components/GameScreenLayout";
import PlayerCard from "@app/components/PlayerCard";
import PlayersLayout from "@app/components/PlayersLayout";
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
