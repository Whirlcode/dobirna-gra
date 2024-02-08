import { AspectRatio, Box, Button, Card, Input, Typography } from "@mui/joy";
import FloatingInput from "./FloatingInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultImage from "../assets/maxresdefault.jpg";
import InputWithoutArrows from "./InputWithoutArrows";

import { styled } from "@mui/joy";

const VisuallyHiddenInput = styled("input")`
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function CreateLobbyTab() {
  const [userImg, setUserImg] = useState<string>(defaultImage);
  const [playerCount, setPlayerCount] = useState<number>(0);
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
        <Box
          sx={{
            margin: "15px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "50%",
          }}
        >
          <Input
            sx={{ minHeight: 60 }}
            type="text"
            placeholder="Name room"
          ></Input>
          <InputWithoutArrows
            count={playerCount}
            setCount={setPlayerCount}
          ></InputWithoutArrows>{" "}
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
              onChange={(e) => handleImageChange(e.target.files)}
            />
            Choose pack file
          </Button>
        </Box>
        <Button
          sx={{ display: "flex" }}
          onClick={() => {
            navigate("/game");
          }}
        >
          Create new room
        </Button>
      </Card>
    </>
  );
}
