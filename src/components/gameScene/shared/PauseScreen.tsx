import { Box } from "@mui/joy";

export default function PauseScreen() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                height: "100%",
                width: "100%",
                position: "absolute",
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: "blur(5px)",
                fontSize: '100px',
                fontWeight: '900',
                zIndex: 2
            }}> PAUSE</Box>
        </>
    )
}