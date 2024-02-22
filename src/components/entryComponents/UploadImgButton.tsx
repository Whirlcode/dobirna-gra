import { useAppSelector } from "@app/Store";
import { AspectRatio, Box, Button, styled } from "@mui/joy";
import { useState } from "react";
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
  const me = useAppSelector(s => s.gameState.me)
  const [userImg, setUserImg] = useState<string>(
    'https://placehold.co/600x400/263238/48af63?text=Upload+Image');

  const handleImageChange = async (files: FileList | null) => {
    if (files === null) return;
    const file = files[0];
    setUserImg(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', me)
    const url = `${import.meta.env.VITE_API}/asset/profile/upload`
    await fetch(url, {
      method: 'POST',
      body: formData
    })
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
            ":hover": { backgroundColor: "rgba(79, 79, 79, 0.3)" },
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
