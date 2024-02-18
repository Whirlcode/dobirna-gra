import LinearProgress from "@mui/joy/LinearProgress";

import { useEffect, useState } from "react";

export default function MainTimer({
  initialVal,
  step,
}: {
  initialVal: number;
  step: number;
}) {
  const [milisec, setMilisec] = useState(initialVal);

  const converter = (curr: number, targ: number) => {
    return (curr / targ) * 100;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setMilisec((prev) => (prev <= 0 ? initialVal : prev - step));
    }, step);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="lg"
      thickness={32}
      value={converter(milisec, initialVal)}
      sx={{
        marginTop: "auto",
        marginBottom: "20px",
        "--LinearProgress-radius": "0px",
        "--LinearProgress-progressThickness": "24px",
        borderColor: "neutral.500",
        maxHeight: 40,
        minWidth: "100%",
      }}
    />
  );
}
