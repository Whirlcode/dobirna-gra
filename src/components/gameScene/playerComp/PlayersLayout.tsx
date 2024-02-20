import { useAppSelector } from "@app/Store";
import { Box } from "@mui/joy";
import PlayerCard from "@app/components/gameScene/playerComp/PlayerCard";
import EmptyPlayerPlace from "@app/components/gameScene/playerComp/emptyPlayerPlace";

export default function PlayersLayout() {
  const Places = useAppSelector(s => s.gameState.lobby?.Places)
  return (
    <Box
      key={Math.floor(Math.random() * 9999)}
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
      {Places?.map((user, idx) => {
        return (
          <Box key={idx}>
            {user.IsOccupied
              ?
              <PlayerCard
                key={user.UserId}
                initialVal={60000}
                step={900}
                playerName={user.UserName}
                indexOfPlace={idx}
                scoreOfPlace={user.Score}
              />
              :
              <EmptyPlayerPlace key={user.UserId} seatIdx={idx} />
            }
          </Box>
        );
      }) ?? []}
    </Box>
  );
}
