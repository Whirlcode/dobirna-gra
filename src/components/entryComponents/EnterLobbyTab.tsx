import { useState, useRef } from "react"

import { Box, Card, Typography } from "@mui/joy";
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
            border: `2px solid ${theme.vars.palette.neutral[800]}`,
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
          <FloatingInput label="Name" placeholder="John Doe" onChange={(e) => playerName.current = e.target.value} />
        </Box>
        <Box
          sx={theme => ({
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            gap: "16px",
            p: '15px 140px',
            border: `2px solid ${theme.vars.palette.neutral[800]}`,
            borderRadius: 'lg'
          })}
        >
          <Typography
            fontWeight={500}
            level="body-sm"
            sx={{ position: 'absolute', left: '5%' }}>
            Enter code
          </Typography>
          <Input
            sx={{ minHeight: 60 }}
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            startDecorator={<KeyIcon />}
            endDecorator={
              <Button
                sx={{ height: 50 }}
                onClick={() => {
                  hubController.joinLobby(inviteCode, playerName.current)
                }}
              >
                <Typography
                  sx={theme => ({ color: theme.vars.palette.common.black })}
                  fontWeight={500}
                >
                  Join room
                </Typography>
              </Button>
            }
            placeholder="Invite code"
          />
        </Box>
      </Card>
    </>
  );
}

