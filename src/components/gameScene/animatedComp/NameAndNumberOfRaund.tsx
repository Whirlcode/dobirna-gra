import { Box, Typography } from "@mui/joy"
import { useEffect } from "react"
import { keyframes } from "@mui/styled-engine";

type ChangeIdxFunc = {
    changeIdx: () => void
    numberOfRaund: number
}

const nameNumberAnim = keyframes`
0% {
    filter: blur(12px);
    opacity: 0;
 }
10% {
    filter: blur(0px);
    opacity: 1;
 }
50% {
    filter: blur(0px);
    opacity: 1;
 }
90% {
    filter: blur(0.01);
 }
100% {
    filter: blur(12px) opacity(0%);
 }
`

export default function NameAndNumberOfRaund(props: ChangeIdxFunc) {

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
                    animation: `${nameNumberAnim} 6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
                    wordBreak: 'break-word',
                    color: theme.vars.palette.primary[700]
                })}
                height={'fit-content'}
                fontSize={'150px'}
                fontWeight={800}
            >
                {props.numberOfRaund} Raound
            </Typography>
        </Box>
    </>

}