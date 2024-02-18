import { Navigate } from "react-router-dom";

import { useAppSelector } from "@app/Store";
import DrawerMain from "@app/components/gameScene/DrawerMain";

import GameScreenLayout from "@app/components/gameScene/GameScreenLayout";

import PlayerCard from "@app/components/gameScene/playerComp/PlayerCard";
import PlayersLayout from "@app/components/gameScene/playerComp/PlayersLayout";
import { Box } from "@mui/joy";
import EmptyPlayerPlace from "@app/components/gameScene/playerComp/emptyPlayerPlace";


export default function GamePage() {
  const isInLobby = useAppSelector(s => s.gameState.lobby?.Id) != null;
  const { lobby } = useAppSelector(s => s.gameState);

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
          {lobby?.Places.map((user, idx) => {
            return (
              <>
                {user.IsOccupied
                  ?
                  <PlayerCard
                    key={user.UserId}
                    initialVal={60000}
                    step={900}
                    playerName={user.UserName}
                  />
                  :
                  <EmptyPlayerPlace seatIdx={idx} />
                }
              </>
            );
          })}
        </PlayersLayout>
      </Box>
    </>
  );
}
