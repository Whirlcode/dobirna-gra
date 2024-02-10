import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import { Box } from "@mui/joy";
import Slider from "@mui/joy/Slider";

export default function SoundSlide() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "300px",
        alignItems: "center",
      }}
    >
      <VolumeMuteIcon />

      <Slider
        defaultValue={50}
        color="success"
        disabled={false}
        marks={false}
        orientation="horizontal"
        size="md"
        variant="soft"
      />
      <VolumeUpIcon />
    </Box>
  );
}
