import { AspectRatio, Box, Button, ButtonGroup, Card, Snackbar, Tooltip, Typography } from "@mui/joy";
import { useAppSelector } from "@app/Store";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import KeyboardTabRoundedIcon from '@mui/icons-material/KeyboardTabRounded';
import { useState } from "react";
import DefaultUserImage from '@app/assets/maxresdefault.jpg'

export default function GameMasterCard() {
  const amMaster = useAppSelector((s) => s.gameState.amMaster);
  const MasterName = useAppSelector((s) => s.gameState.lobby?.Master.UserName);
  const MasterImgId = useAppSelector((s) => s.gameState.lobby?.Master.ImageId ?? '');
  return (
    <>
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
            <img src={MasterImgId === '' ? DefaultUserImage : `${import.meta.env.VITE_API}/Asset/profile/get/${MasterImgId}`}
              loading="lazy" alt="" />
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
              {MasterName}
            </Typography>
          </Box>
          <TextOfGameMaster />
        </Card>
        {amMaster && <ControlGameFlowButtons />}
      </Box>
    </>
  );
}

function ControlGameFlowButtons() {
  const [isPaused, setIsPaused] = useState(false)
  const [openModalSkipRound, setOpenModalSkipRound] = useState(false)

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
          <Button onClick={() => setOpenModalSkipRound((v) => !v)} key="skipRound" sx={{ height: "4vw", padding: '0' }}>
            <KeyboardTabRoundedIcon sx={{ fontSize: '50px', color: 'rgb(255, 86, 86)' }} />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ModalForSkipRound open={openModalSkipRound} />
    </>
  )
}

function TextOfGameMaster() {
  return (
    <>
      <Box
        sx={(t) => ({
          display: "flex",
          minWidth: "fit-content",
          maxHeight: "35vh",
          border: "1px solid #ccc",
          padding: "5px",
          position: "absolute",
          backgroundColor: t.vars.palette.primary[800],
        })}>
        <Typography
          sx={(t) => ({
            fontWeight: '600',
            wordBreak: "break-word",
            overflow: "auto",
            fontSize: `1vw`,
            margin: 0,
            color: t.vars.palette.neutral[50]
          })}>
          SAMPLE TEXT
        </Typography>
      </Box>
    </>
  )
}


function ModalForSkipRound({ open }: { open: boolean }) {
  return <>
    <Snackbar
      variant="soft"
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      open={open}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200px',
        padding: '20px',
        justifyContent: 'space-evenly'
      }}>
      <Box>
        <Typography level="h2">Do you want to skip this round?</Typography>
      </Box>
      <Box>
        <ButtonGroup
          sx={{ width: '500px' }}
          buttonFlex={1}
          aria-label="flex button group"
        >
          <Button sx={{
            ":hover": { boxShadow: "0px 0px 20px 10px rgb(130, 255, 146)" },
            fontSize: '18px'
          }}
            color="success"
            variant="soft"
          >Yes
          </Button>
          <Button sx={{
            ":hover": { boxShadow: "0px 0px 20px 10px rgb(255, 112, 112)" },
            fontSize: '18px'
          }}
            color="danger"
            variant="soft"
          >No
          </Button>
        </ButtonGroup>
      </Box>
    </Snackbar>
  </>
}