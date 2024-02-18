import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton } from "@mui/joy";
import { useState } from "react";
import SoundSlide from "@app/components/gameScene/shared/SoundSlide";

export default function SoundButton() {
  const [openSoundSlide, setOpenSoundSlide] = useState(false);
  return (
    <>
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
    </>
  );
}
