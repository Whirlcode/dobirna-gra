import { AspectRatio, Box, Button, styled } from "@mui/joy";
import { useState } from "react";
import defaultImage from "@app/assets/maxresdefault.jpg";

const VisuallyHiddenInput = styled("input")`
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: relative;
  bottom: 0;
  left: 0;
  white-space: nowrap;
`;

export default function UploadImgButton() {
  const [userImg, setUserImg] = useState<string>(defaultImage);

  const handleImageChange = (files: FileList | null) => {
    if (files === null) return;
    const file = files[0];
    setUserImg(URL.createObjectURL(file));
  };
  return (
    <>
      <Box
        sx={{
          minWidth: "280px",
        }}
      >
        <Button
          sx={{
            p: 0,
            position: "absolute",
            zIndex: 5,
            height: 300,
            width: "280px",
            ":hover": { backgroundColor: "rgba(231, 231, 231, 0.33)" },
          }}
          component="label"
          tabIndex={-1}
          variant="outlined"
          color="neutral"
        >
          <VisuallyHiddenInput
            accept="image/*"
            type="file"
            onChange={(e) => handleImageChange(e.target.files)}
          />
        </Button>
        <AspectRatio minHeight={300}>
          <img
            style={{ maxHeight: 300, maxWidth: "280px" }}
            src={userImg}
            alt="image not found"
          />
        </AspectRatio>
      </Box>
    </>
  );
}
