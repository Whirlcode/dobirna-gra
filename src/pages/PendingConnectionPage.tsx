import { Box } from "@mui/joy";
import { keyframes } from "@mui/styled-engine";
import heartImg from "@app/assets/heart_pixel.png";

const heartBeat = keyframes`
0% { transform: scale(0.95) }
    5% { transform: scale(1.1) }
    39% { transform: scale(0.85) }
    45% { transform: scale(1) }
    60% { transform: scale(0.95) }
    100% { transform: scale(0.9) }
`

export default function PendingConnectionPage() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ animation: `${heartBeat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)` }}>
                    <img src={heartImg} alt="" />
                </Box>
            </Box>
        </>
    )
}
