import { useAppDispatch } from "@app/Store";
import { addImgPlayer } from "@app/features/userInfo/userInfoSlice";
import { AspectRatio, Box, Button, styled } from "@mui/joy";
import { useEffect, useState } from "react";

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
  const [userImg, setUserImg] = useState<string>(
    "https://placehold.co/600x400?text=Choose+your+picture"
  );
  const dispatch = useAppDispatch();

  const handleImageChange = (files: FileList | null) => {
    if (files === null) return;
    const file = files[0];
    setUserImg(URL.createObjectURL(file));
  };

  useEffect(() => {
    dispatch(addImgPlayer(userImg));
  }, [dispatch, userImg]);

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
