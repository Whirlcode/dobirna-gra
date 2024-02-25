import { useState, useRef } from "react"

import { Box, Card } from "@mui/joy";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import KeyIcon from "@mui/icons-material/Key";
import FloatingInput from "@app/components/base/ExtendedInput";

import UploadImgButton from "@app/components/entryComponents/UploadImgButton";

import { useQuery } from "@app/hooks/query";

import hubController from "@app/SignalR/HubController"

export default function EnterLobbyTab() {
  const query = useQuery();
  const [inviteCode, setInviteCode] = useState(query.get("room") ?? "");
  const playerName = useRef<string>("")
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
          <UploadImgButton></UploadImgButton>
          <FloatingInput label="Name" placeholder="John Doe" onChange={(e) => playerName.current = e.target.value}/>
        </Box>

        <Input
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          startDecorator={<KeyIcon />}
          endDecorator={
            <Button
              onClick={() => {
                hubController.joinLobby(inviteCode, playerName.current)
              }}
            >
              Join Room
            </Button>
          }
          placeholder="Invite code"
        />
      </Card>
    </>
  );
}

