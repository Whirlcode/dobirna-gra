import { useAppSelector } from "@app/Store";
import { Box } from "@mui/joy";
import PlayerCard from "@app/components/gameScene/playerComp/PlayerCard";
import EmptyPlayerPlace from "@app/components/gameScene/playerComp/emptyPlayerPlace";

export default function PlayersLayout() {
  const Places = useAppSelector(s => s.gameState.lobby?.Places)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          padding: "10px",
          borderRadius: 25,
          width: "100%",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {Places!.map((user, idx) => {
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
      </Box>
    </>
  );
}
