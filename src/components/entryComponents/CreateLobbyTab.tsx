import { Box, Button, Card, Input, Typography } from "@mui/joy";
import ExtendedInput from "@app/components/base/ExtendedInput";
import { ChangeEvent, useState, useRef } from "react";
import InputNoArrows from "@app/components/base/InputNoArrows";

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
  const [playerCount, setPlayerCount] = useState<number>(0)
  const playerName = useRef<string>("")
  const roomName = useRef('');

  function onChangeRoomName(event: React.ChangeEvent<{ value: string }>) {
    roomName.current = event.target.value
  }

  function onChangeName(event : ChangeEvent<{value: string}>){
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
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <UploadImgButton />
          <ExtendedInput label="Name" placeholder="John Doe" onChange={onChangeName}/>
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
          <ExtendedInput label="Name room" placeholder="Name room" sx={{ minHeight: 60 }} type="text" onChange={onChangeRoomName} />
          <InputNoArrows count={playerCount} setCount={setPlayerCount} />
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
            hubController.createLobby(roomName.current, playerCount, playerName.current);
          }}
        >
          Create new room
        </Button>
      </Card>
    </>
  );
}
