import { Box } from "@mui/joy";
import GameMasterCard from "@app/components/gameScene/gameMasterComp/GameMasterCard";
import BigAnswerButton from "@app/components/gameScene/shared/BigAnswerButton";
import { useAppSelector } from "@app/Store";
import EmptyAdminPlace from "@app/components/gameScene/gameMasterComp/EmptyAdminPlace";
import IdleStageOfGame from "@app/components/gameScene/IdleStage.GameScreen";
import { IdleStateData, RoundStateData } from "@app/SignalR/MessageTypes";
import AnimationRaund from "@app/components/gameScene/animatedComp/AnimationRaund";

export default function GameScreenLayout() {
  const currentState = useAppSelector((s) => s.gameState.currentState);
  const IsOccupiedMaster = useAppSelector((s) => s.gameState.lobby?.Master.IsOccupied);
  const amMaster = useAppSelector((s) => s.gameState.amMaster);

  return (
    <Box sx={{ display: "flex", width: "100%", height: "60vh", flex: "1" }}>
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
        {currentState?.Type == IdleStateData.getType() && <IdleStageOfGame />}
        {currentState?.Type == RoundStateData.getType() && <AnimationRaund />}
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0px 20px",
          marginTop: "10vh",
        }}>
        {IsOccupiedMaster
          ?
          <GameMasterCard />
          :
          <EmptyAdminPlace />
        }
      </Box>
    </Box>
  );
}
