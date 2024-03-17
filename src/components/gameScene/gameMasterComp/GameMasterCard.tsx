import { AspectRatio, Box, Card, Typography } from "@mui/joy";
import { useAppSelector } from "@app/Store";
import DefaultUserImage from '@app/assets/maxresdefault.jpg'
import ControlGameFlowButtons from "./ControlGameFlowButtons";

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


