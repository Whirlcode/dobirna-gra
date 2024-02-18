import { Button } from "@mui/joy";

export default function BigAnswerButton() {
  return (
    <>
      <Button
        sx={{
          fontSize: "24px",
          height: "300px",
          width: "250px",
          backgroundColor: "rgb(117, 9, 1)",
          ":hover": {
            backgroundColor: "rgb(247, 82, 69)",
          },
        }}
      >
        ANSWER
      </Button>
      <Button
        sx={{
          fontSize: "24px",
          height: "80px",
          width: "250px",
          backgroundColor: "rgb(68, 68, 68)",
          ":hover": {
            backgroundColor: "rgb(122, 122, 122)",
          },
        }}>
        SKIP QUESTION
      </Button>
    </>
  );
}
