import { Box, Typography } from "@mui/joy";
import { keyframes } from "@mui/styled-engine";


const breatheAnimation = keyframes`
 0% {
    transform: translateY(100%); 
  }
 100% {
    transform: translateY(-100%); 
  }
`

export default function AnimatedScrollForThemes() {
  const arr = [
    {
      text: 'First'
    },
    {
      text: 'Secoundadadadasd'
    },
    {
      text: 'Thirasfsafasfd'
    },
    {
      text: 'Fourth'
    },
    {
      text: 'Fiveth'
    },
    {
      text: 'Thirasgxzcd'
    },
    {
      text: 'Fouvzxvsadrth'
    },
    {
      text: 'Five23213asth'
    },
    {
      text: 'Thidsadascxzrd'
    },
    {
      text: 'Fousadasdasfasfrth'
    },
    {
      text: 'Fivexzvasdth'
    },
    {
      text: 'Fouvzxvsadrth'
    },
    {
      text: 'Five23213asth'
    },
    {
      text: 'Thidsadascxzrd'
    },
    {
      text: 'Fousadasdasfasfrth'
    },
    {
      text: 'Fivexzvasdth'
    },
    {
      text: 'Fouvzxvsadrth'
    },
    {
      text: 'Five23213asth'
    },
    {
      text: 'Thidsadascxzrd'
    },
    {
      text: 'Fousadasdasfasfrth'
    },
    {
      text: 'Fivexzvasdth'
    },
    {
      text: 'Fouvzxvsadrth'
    },
    {
      text: 'Five23213asth'
    },
    {
      text: 'Thidsadascxzrd'
    },
    {
      text: 'Fousadasdasfasfrth'
    },
    {
      text: 'Fivexzvasdth'
    },
  ]

  return (
    <Box
      sx={{
        display: "flex",
        overflow: 'hidden',
        maxHeight: '100%'
      }}
    >
      <Box sx={{
        animation: `${breatheAnimation} 25s linear infinite both`,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      }}>
        {arr.map((item) => {
          return <>
            <Typography color="primary" fontWeight={600} fontSize={25}>
              {item.text}
            </Typography>
          </>
        })}
      </Box>
    </Box>
  );
}
