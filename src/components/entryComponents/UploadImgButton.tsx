import { useAppSelector } from "@app/Store";
import { AspectRatio, Box, Button, Typography, styled } from "@mui/joy";
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
  const [userImg, setUserImg] = useState<string>('');

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
      <Box sx={{ width: "200px", height: '200px' }}>
        <Button
          sx={{
            width: "200px",
            height: "200px",
            p: 0,
            position: "absolute",
            zIndex: 5,
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
        <AspectRatio minHeight={200} variant="plain">
          {userImg === ''
            ?
            <Typography
              level="h4"
              fontWeight={500}>Upload your image</Typography>
            :
            <img
              style={{ width: "200px", height: "200px" }}
              src={userImg}
              alt="image not found"
            />
          }
        </AspectRatio>
      </Box>
    </>
  );
}
