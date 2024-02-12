import { Box } from "@mui/joy";
import GameMasterCard from "@app/components/gameScene/GameMasterCard";
import BigAnswerButton from "@app/components/gameScene/BigAnswerButton";
import ShowRoundThemesStage from "@app/components/gameScene/ShowRoundThemesStage";

export default function GameScreenLayout() {
  return (
    <Box
      sx={{ display: "flex", width: "100%", alignItems: "center", flex: "1" }}
    >
      <BigAnswerButton />
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
        }}
      >
        <ShowRoundThemesStage />
      </Box>
      <Box sx={{ padding: "0px 20px" }}>
        <GameMasterCard />
      </Box>
    </Box>
  );
}
