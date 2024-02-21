import { useAppSelector } from "@app/Store";
import { Box, Typography } from "@mui/joy";
import ReadyORStartBtn from "./shared/ReadyORStartBtn";

export default function IdleStageOfGame() {
  const amMaster = useAppSelector((s) => s.gameState.amMaster);
  const inviteCode = useAppSelector(s => s.gameState.lobby?.InviteCode)
  const inviteURL = `${location.host}/?room=${inviteCode}`;
  const packName = "Some random pack name";
  const numberOfRounds = "8";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ p: "20px" }}>
        <Typography level="h2">
          Invite link :
        </Typography>

        <Typography
          variant="solid"
          level="h3"
          sx={theme =>
          ({
            color: theme.vars.palette.primary[500],
            width: 'fit-content',
            userSelect: 'all'
          })}>
          {inviteURL}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 5, gap: 3 }}>
        <Typography
          fontWeight={700}
          fontSize={50}
          variant="plain"
          noWrap={false}
          textAlign={"center"}
          sx={theme => ({ overflowWrap: "anywhere", color: theme.vars.palette.neutral[400] })}
        >
          {packName}
        </Typography>
        <Typography
          level="h1"
          variant="plain"
          textAlign={"center"}
          sx={theme => ({ overflowWrap: "anywhere", color: theme.vars.palette.primary[700] })}
        >
          {numberOfRounds} Rounds
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "5vh",
        }}
      >
        {amMaster
          ?
          <ReadyORStartBtn text={'Start the game'} />
          :
          <ReadyORStartBtn text={'Ready'} />
        }
      </Box>
    </Box>
  );
}
