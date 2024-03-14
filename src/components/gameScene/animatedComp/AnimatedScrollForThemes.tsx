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

  useEffect(() => {
    const t = setTimeout(() => {
      props.changeIdx()
    }, themes.length * 1500)
    return () => { clearTimeout(t) }
  }, [props, themes.length])

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
      {themes.map((item) => {
        return (
          <Typography
            sx={{
              position: 'relative',
              animation: `${breatheAnimation} ${themes.length * 2}s linear both`,
            }}
            key={Math.floor(Math.random() * 99999)}
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
