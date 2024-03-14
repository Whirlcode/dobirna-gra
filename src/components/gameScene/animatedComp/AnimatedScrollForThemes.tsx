import { RoundStateData } from "@app/SignalR/MessageTypes";
import { Box, Typography } from "@mui/joy";
import { keyframes } from "@mui/styled-engine";
import { useEffect } from "react";

type TestingPros = {
  changeIdx: () => void
  questions: RoundStateData['Questions']
}

const breatheAnimation = keyframes`
 0% {
    top : 100%;
  }
 100% {
    top : -200%;
  }
`

export default function AnimatedScrollForThemes(props: TestingPros) {

  const themes: string[] = [];

  for (const theme in props.questions) {
    themes.push(theme)
  }

  const speed = 100
  const heightItem = 180
  const durationPerItem = heightItem / speed;
  const totalDurationMs = themes.length * durationPerItem * 1000

  useEffect(() => {
    const t = setTimeout(() => {
      props.changeIdx()
    }, totalDurationMs)
    return () => { clearTimeout(t) }
  }, [props, themes.length, totalDurationMs])

  return (
    <Box
      sx={{
        display: "flex",
        overflow: 'hidden',
        height: '100%',
        flexDirection: 'column',
        gap: 3
      }}
    >
      {themes.map((item, idx) => {
        return (
          <Typography
            sx={{
              position: 'relative',
              animation: `${breatheAnimation} ${totalDurationMs}ms linear both`,
            }}
            key={`single-theme-${idx}`}
            color="primary"
            fontWeight={700}
            fontSize={48}
            textAlign={'center'}
            lineHeight={'55px'}
          >
            {item}
          </Typography>
        )
      })}
    </Box>
  );
}
