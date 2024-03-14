import { Box, Typography } from "@mui/joy"
import { useEffect } from "react"
import { keyframes } from "@mui/styled-engine";

type ChangeIdxFunc = {
    changeIdx: () => void
}

const nameNumberAnim = keyframes`
    0% {
        letter-spacing: -0.5em;
        transform: translateZ(-700px);
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
    50% {
        transform: translateZ(0);
        opacity: 1;
    }
    70% {
        filter: blur(0);
        opacity: 1;
    }
    100% {
        filter: blur(12px) opacity(0%);
    }
`

export default function ThemesOfRaundText(props: ChangeIdxFunc) {

    useEffect(() => {
        const t = setTimeout(() => {
            props.changeIdx()
        }, 6000)
        return () => { clearTimeout(t) }
    }, [props])

    return <>
        <Box sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            wordBreak: 'break-word',
            overflow: 'clip'
        }}
        >
            <Typography
                sx={theme => ({
                    animation: `${nameNumberAnim} 6s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
                    wordBreak: 'break-word',
                    color: theme.vars.palette.primary[700]
                })}
                height={'fit-content'}
                fontSize={'150px'}
                fontWeight={800}
            >
                Themes of raund :
            </Typography>
        </Box>
    </>

}