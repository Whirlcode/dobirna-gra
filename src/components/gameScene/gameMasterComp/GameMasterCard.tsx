import { AspectRatio, Box, Button, ButtonGroup, Card, Tooltip, Typography } from "@mui/joy";
import { useAppSelector } from "@app/Store";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import KeyboardTabRoundedIcon from '@mui/icons-material/KeyboardTabRounded';
import { useState } from "react";

export default function GameMasterCard() {
  const { gameLobby, createdBy, me } = useAppSelector((s) => s.userInfo);
  return (
    <>
      {gameLobby.map((user) => {
        if (user.isGameMaster) {
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "325px",
                  maxHeight: "330px",
                  maxWidth: "250px",
                  alignItems: "center",
                  padding: "0px",
                  borderRadius: "25px",
                }}>
                <AspectRatio sx={{ minWidth: "100%" }} minHeight="250px">
                  <img src={user.img} loading="lazy" alt="" />
                </AspectRatio>
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Typography
                    level="h4"
                    variant="plain"
                    textAlign={"center"}
                    sx={{
                      padding: "0px 10px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontSize: "1.25vw",
                      minWidth: 250,
                    }}>
                    {user.name}
                  </Typography>
                </Box>
                <TextOfGameMaster />
              </Card>
              {createdBy === me && <ControlGameFlowButtons />}
            </Box>
          );
        }
      })}
    </>
  );
}

function ControlGameFlowButtons() {
  const [isPaused, setIsPaused] = useState(false)

  const handlePauseClick = () => {
    setIsPaused((v) => !v)
  }

  return (
    <>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical solid button group"
        variant="soft"
        size="lg"
        sx={{ '--ButtonGroup-separatorColor': 'rgba(160, 234, 255, 0.5)' }}
      >
        <Tooltip placement="left" size="lg" title="Pause / Unpause">
          <Button key="pause" sx={{ height: "4vw", padding: '0' }} onClick={handlePauseClick}>
            {isPaused
              ?
              <PlayArrowRoundedIcon color="success" sx={{ fontSize: '50px' }} />
              :
              <PauseRoundedIcon color="success" sx={{ fontSize: '50px' }} />
            }
          </Button>
        </Tooltip>
        <Tooltip placement="left" size="lg" title="Skip question">
          <Button key="skipQuestion" sx={{ height: "4vw", padding: '0' }}>
            <SkipNextRoundedIcon color="warning" sx={{ fontSize: '50px' }} />
          </Button>
        </Tooltip>
        <Tooltip placement="left" size="lg" title="Skip Round">
          <Button key="skipRound" sx={{ height: "4vw", padding: '0' }}>
            <KeyboardTabRoundedIcon sx={{ fontSize: '50px', color: 'rgb(255, 86, 86)' }} />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </>
  )
}

function TextOfGameMaster() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minWidth: "fit-content",
          maxHeight: "35vh",
          border: "1px solid #ccc",
          padding: "5px",
          position: "absolute",
          backgroundColor: "black",
        }}>
        <Typography
          sx={{
            wordBreak: "break-word",
            overflow: "auto",
            fontSize: `1vw`,
            margin: 0,
          }}>
          SAMPLE TEXT or
        </Typography>
      </Box>
    </>
  )
}
