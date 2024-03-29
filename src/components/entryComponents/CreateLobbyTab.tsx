import { Box, Button, Card, Typography } from "@mui/joy";
import ExtendedInput from "@app/components/base/ExtendedInput";
import { ChangeEvent, useRef } from "react";
import PlayerCountInput from "@app/components/entryComponents/PlayerCountInput";

import { styled } from "@mui/joy";
import UploadImgButton from "./UploadImgButton";

import hubController from "@app/SignalR/HubController";

const VisuallyHiddenInput = styled("input")`
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
`;

export default function CreateLobbyTab() {
  const playerName = useRef<string>("")
  const roomName = useRef('')
  const playerCount = useRef(0)

  function onChangeRoomName(event: React.ChangeEvent<{ value: string }>) {
    roomName.current = event.target.value
  }

  function onChangeName(event: ChangeEvent<{ value: string }>) {
    playerName.current = event.target.value
  }

  return (
    <>
      <Card
        sx={{
          display: "flex",
          marginTop: 1,
          minHeight: 450,
          justifyContent: "space-between",
          width: "600px",
        }}
      >
        <Box
          sx={theme => ({
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            gap: "16px",
            p: '15px 140px',
            border: `1px solid ${theme.vars.palette.neutral.outlinedBorder}`,
            borderRadius: 'lg'
          })}
        >
          <Typography
            fontWeight={500}
            level="body-sm"
            sx={{ position: 'absolute', left: '5%' }}>
            Profile settings
          </Typography>
          <UploadImgButton />
          <ExtendedInput label="Name" placeholder="John Doe" onChange={onChangeName} />
        </Box>
        <Box
          sx={theme => ({
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            gap: "16px",
            p: '15px 140px',
            border: `1px solid ${theme.vars.palette.neutral.outlinedBorder}`,
            borderRadius: 'lg'
          })}
        >
          <Typography
            fontWeight={500}
            level="body-sm"
            sx={{ position: 'absolute', left: '5%' }}>
            Lobby settings
          </Typography>
          <ExtendedInput label="Name room" placeholder="Name room" sx={{ minHeight: 60 }} type="text" onChange={onChangeRoomName} />
          <PlayerCountInput refValue={playerCount} maxValue={10} />
          <Button
            sx={{
              ":hover": {
                backgroundColor: "rgba(79, 79, 79, 0.3)",
              },
              minHeight: 60,
              width: '100%'
            }}
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="neutral"
          >
            <VisuallyHiddenInput
              type="file"
              onChange={() => console.log("You choosed a pack")}
            />
            <Typography>Upload pack file</Typography>
          </Button>
        </Box>
        <Button
          sx={{ display: "flex", minHeight: 40 }}
          onClick={() => {
            hubController.createLobby(roomName.current, playerCount.current, playerName.current);
          }}
        >
          <Typography
            level="title-md"
            sx={theme => ({ color: theme.vars.palette.neutral.solidColor })}
            fontWeight={500}
          >
            Create new room
          </Typography>
        </Button>
      </Card>
    </>
  );
}
