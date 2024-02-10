import { AspectRatio, Box, Card, Typography } from "@mui/joy";
import defaultImage from "../assets/maxresdefault.jpg";
import { TextOfGameMaster } from "./TextOfGameMaster";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function GameMasterCard() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          height: 325,
          maxWidth: 250,
          gap: 0,
          alignItems: "center",
          padding: "10px",
          borderRadius: 25,
        }}
        variant="soft"
      >
        <AspectRatio sx={{ minWidth: "100%" }} minHeight="250px">
          <img src={defaultImage} loading="lazy" alt="" />
        </AspectRatio>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            margin: "10px 0px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            level="h4"
            variant="plain"
            sx={{
              padding: "0px 10px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: "1vw",
              minWidth: 250,
            }}
          >
            THE NAME OF GAME MASTER OR ANYTHING ELSE
          </Typography>
        </Box>
        <ArrowDropDownIcon
          sx={{
            width: "40px",
            height: "40px",
            position: "relative",
          }}
        />
        <TextOfGameMaster />
      </Card>
    </>
  );
}
