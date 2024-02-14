import { Box } from "@mui/joy";
import GameMasterCard from "@app/components/gameScene/GameMasterCard";
import BigAnswerButton from "@app/components/gameScene/BigAnswerButton";
import IdleStageOfGame from "@app/components/gameScene/IdleStage.GameScreen";
import { useAppSelector } from "@app/Store";
import EmptyAdminPlace from "@app/components/gameScene/EmptyAdminPlace";

export default function GameScreenLayout() {
  const gameLobby = useAppSelector((s) => s.userInfo.gameLobby);
  const { createdBy, me } = useAppSelector((s) => s.userInfo);

  return (
    <Box sx={{ display: "flex", width: "100%", flex: "1" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 10px",
          marginTop: "auto",
          gap: 2,
        }}>
        {createdBy !== me
          ?
          <BigAnswerButton />
          :
          <Box sx={{ width: "2vw" }} />
        }
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100%",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          position: "relative",
          padding: "10px",
          borderRadius: 25,
        }}>
        <IdleStageOfGame />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0px 20px",
          marginTop: "10vh",
        }}>
        {gameLobby.some((user) => user.isGameMaster === true)
          ?
          <GameMasterCard />
          :
          <EmptyAdminPlace />
        }
      </Box>
    </Box>
  );
}
