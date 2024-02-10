import { Box, Button } from "@mui/joy";

export default function BigAnswerButton() {
  return (
    <>
      <Box sx={{ padding: "0px 20px" }}>
        <Button
          sx={{
            minHeight: "300px",
            width: "250px",
            backgroundColor: "rgb(117, 9, 1)",
            ":hover": {
              backgroundColor: "rgb(247, 82, 69)",
            },
          }}
        >
          PRESS FOR ANSWER
        </Button>
      </Box>
    </>
  );
}
