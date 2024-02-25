import ExtendedInput from "@app/components/base/ExtendedInput";
import { Typography } from "@mui/joy";
import { useState, useEffect } from "react";

interface PlayerCountInputProps {
  refValue?: React.MutableRefObject<number>
  maxValue: number
}

export default function PlayerCountInput(props: PlayerCountInputProps) {
  const [count, setCount] = useState(props.refValue?.current ?? 0)

  useEffect(() => {
    if (props.refValue) {
      props.refValue.current = count
    }
  }, [count, props.refValue])

  return (
    <>
      <ExtendedInput
        label="Count of players"
        placeholder={`${props.maxValue} max`}
        hideArrow={true}
        type="number"
        sx={{
          minHeight: 60
        }}
        variant="outlined"
        endDecorator={false}
        color={count > props.maxValue ? "danger" : "neutral"}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      {count > props.maxValue && (
        <Typography
          sx={{ padding: "10px, 0px ,10px, 0px" }}
          color="danger"
          level="body-sm"
          noWrap
          variant="plain"
        >
          {props.maxValue} is Maximum players
        </Typography>
      )}
    </>
  );
}
