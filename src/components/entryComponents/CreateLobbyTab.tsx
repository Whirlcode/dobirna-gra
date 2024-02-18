import { Box, Button, Card, Input, Typography } from "@mui/joy";
import FloatingInput from "@app/components/entryComponents/FloatingInput";
import { useState } from "react";
import InputWithoutArrows from "./InputWithoutArrows";

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
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [roomName, setRoomName] = useState('');

  function onChangeRoomName(event: React.ChangeEvent<{ value: string }>) {
    setRoomName(event.target.value)
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
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <UploadImgButton />
          <FloatingInput label="Name" placeholder="John Doe" />
        </Box>
        <Box
          sx={{
            margin: "15px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "50%",
          }}
        >
          <Input sx={{ minHeight: 60 }} type="text" placeholder="Name room" value={roomName} onChange={onChangeRoomName} />
          <InputWithoutArrows count={playerCount} setCount={setPlayerCount} />
          {playerCount > 10 && (
            <Typography
              sx={{ padding: "10px, 0px ,10px, 0px" }}
              color="danger"
              level="body-sm"
              noWrap
              variant="plain"
            >
              10 is Maximum players
            </Typography>
          )}
          <Button
            sx={{
              ":hover": {
                backgroundColor: "rgba(231, 231, 231, 0.33)",
              },
              minHeight: 60,
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
            Choose pack file
          </Button>
        </Box>
        <Button
          sx={{ display: "flex" }}
          onClick={() => {
            hubController.createLobby(roomName);
          }}
        >
          Create new room
        </Button>
      </Card>
    </>
  );
}
