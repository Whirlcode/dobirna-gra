import { Box } from "@mui/joy";
import GameMasterCard from "@app/components/gameScene/gameMasterComp/GameMasterCard";
import BigAnswerButton from "@app/components/gameScene/shared/BigAnswerButton";
import IdleStageOfGame from "@app/components/gameScene/IdleStage.GameScreen";
import { useAppSelector } from "@app/Store";
import EmptyAdminPlace from "@app/components/gameScene/gameMasterComp/EmptyAdminPlace";

export default function GameScreenLayout() {

  const { lobby, amMaster } = useAppSelector((s) => s.gameState);

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
        {amMaster
          ?
          <Box sx={{ width: "2vw" }} />
          :
          <BigAnswerButton />
        }
      </Box>
      <Box
        sx={(t) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100%",
          width: "100%",
          backgroundColor: `rgba(${t.vars.palette.neutral.lightChannel} / 0.5)`,
          position: "relative",
          padding: "10px",
          borderRadius: 25,
        })}>
        <IdleStageOfGame />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0px 20px",
          marginTop: "10vh",
        }}>
        {lobby?.Master.IsOccupied
          ?
          <GameMasterCard />
          :
          <EmptyAdminPlace />
        }
      </Box>
    </Box>
  );
}
