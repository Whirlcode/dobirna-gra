import { Box, IconButton } from "@mui/joy";
import GameMasterCard from "./GameMasterCard";
import MainTimer from "./MainTimer";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SoundSlide from "./SoundSlide";
import BigAnswerButton from "./BigAnswerButton";
import { useState } from "react";

export default function GameScreenLayout() {
  const [openSoundSlide, setOpenSoundSlide] = useState(false);
  return (
    <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
      <BigAnswerButton />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: 650,
          width: "100%",
          backgroundColor: "rgba(0, 54, 44, 0.1)",
          position: "relative",
          padding: "10px",
          borderRadius: 25,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        >
          <IconButton
            sx={{
              width: "80px",
              height: "80px",
            }}
            onClick={() => setOpenSoundSlide((v) => !v)}
          >
            <VolumeUpIcon sx={{ width: "70px", height: "70px" }} />
          </IconButton>
          {openSoundSlide && <SoundSlide />}
        </Box>

        <MainTimer initialVal={60000} step={10}></MainTimer>
      </Box>
      <Box sx={{ padding: "0px 20px" }}>
        <GameMasterCard></GameMasterCard>
      </Box>
    </Box>
  );
}
