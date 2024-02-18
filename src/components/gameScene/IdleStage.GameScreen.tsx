import { useAppSelector } from "@app/Store";
import { Box, Button, Typography } from "@mui/joy";

export default function IdleStageOfGame() {
  const { createdBy, me } = useAppSelector((s) => s.userInfo);
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
        <Typography color="primary" level="h2" variant="plain">
          Invite link :
        </Typography>

        <Typography color="success" level="h3" variant="plain">
          {inviteURL}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 5, gap: 3 }}>
        <Typography
          color="primary"
          fontWeight={700}
          fontSize={50}
          variant="plain"
          noWrap={false}
          textAlign={"center"}
          sx={{ overflowWrap: "anywhere" }}
        >
          {packName}
        </Typography>
        <Typography
          color="success"
          level="h1"
          variant="plain"
          textAlign={"center"}
          sx={{ overflowWrap: "anywhere" }}
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
        {createdBy !== me &&
          <Button
            color="primary"
            sx={{
              height: "80px",
              width: "600px",
              ":hover": {
                backgroundColor: "rgb(165, 255, 253)",
              }
            }}>
            <Typography color="success" level="h1" variant="plain">
              Ready
            </Typography>
          </Button>}
      </Box>
    </Box>
  );
}
