import { Box, Card } from "@mui/joy";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import defaultImage from "../assets/maxresdefault.jpg";
import KeyIcon from "@mui/icons-material/Key";
import { styled } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";

import FloatingInput from "@app/components/FloatingInput";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")`
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function EnterLobbyTab() {
  const [userImg, setUserImg] = useState<string>(defaultImage);
  const navigate = useNavigate();

  const handleImageChange = (files: FileList | null) => {
    if (files === null) return;
    const file = files[0];
    setUserImg(URL.createObjectURL(file));
  };
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
          <Box
            sx={{
              minWidth: 200,
              minHeight: 300,
            }}
          >
            <Button
              sx={{
                position: "absolute",
                zIndex: 5,
                height: 300,
                width: 200,
                ":hover": { backgroundColor: "rgba(231, 231, 231, 0.33)" },
              }}
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
            >
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => handleImageChange(e.target.files)}
              />
            </Button>
            <AspectRatio minHeight={300}>
              <img
                style={{ maxHeight: 300, maxWidth: 200 }}
                src={userImg}
                alt="image not found"
              />
            </AspectRatio>
          </Box>
          <FloatingInput label="Name" placeholder="John Doe" />
        </Box>

        <Input
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
        ></Input>
        <Button
          sx={{ display: "flex" }}
          onClick={() => {
            navigate("/game");
          }}
        >
          Join Room
        </Button>
      </Card>
    </>
  );
}
