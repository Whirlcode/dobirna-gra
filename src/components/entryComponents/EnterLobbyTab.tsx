import { Box, Card } from "@mui/joy";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import KeyIcon from "@mui/icons-material/Key";
import FloatingInput from "@app/components/entryComponents/FloatingInput";

import { useNavigate } from "react-router-dom";
import UploadImgButton from "@app/components/entryComponents/UploadImgButton";
import { useAppDispatch } from "@app/Store";
import {
  addInviteLink,
  addPlayerToLobby,
} from "@app/features/userInfo/userInfoSlice";
import { useRef } from "react";

export default function EnterLobbyTab() {
  const invLink = useRef<string>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
          <FloatingInput label="Name" placeholder="John Doe" />
        </Box>

        <Input
          onChange={(e) => (invLink.current = e.target.value)}
          startDecorator={<KeyIcon />}
          endDecorator={
            <Button
              onClick={() => {
                navigate("/game");
              }}
            >
              Enter
            </Button>
          }
          placeholder="Invite code"
        />
        <Button
          sx={{ display: "flex" }}
          onClick={() => {
            dispatch(addInviteLink(invLink));
            dispatch(addPlayerToLobby());
            navigate("/game");
          }}
        >
          Join Room
        </Button>
      </Card>
    </>
  );
}
