import { Input } from "@mui/joy";

export default function InputWithoutArrows({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Input
        sx={{
          minHeight: 60,
          "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
            {
              "-webkit-appearance": "none",
              margin: 0,
            },
          "input[type=number]": {
            "-moz-appearance": "textfield",
          },
        }}
        variant="outlined"
        endDecorator={false}
        color={count > 10 ? "danger" : "neutral"}
        type="number"
        placeholder="Count of players"
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
    </>
  );
}
