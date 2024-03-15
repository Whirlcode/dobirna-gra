import { useAppSelector } from "@app/Store";
import { Box } from "@mui/joy";
import PlayerCard from "@app/components/gameScene/playerComp/PlayerCard";
import EmptyPlayerPlace from "@app/components/gameScene/playerComp/emptyPlayerPlace";

export default function PlayersLayout() {
  const Places = useAppSelector(s => s.gameState.lobby?.Places)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        m: '10px 0px',
        borderRadius: 25,
        width: "100%",
        gap: '20px',
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
                indexOfPlace={idx}
                user={user}
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
