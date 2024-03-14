import { RoundStateData } from "@app/SignalR/MessageTypes"
import { useAppSelector } from "@app/Store"
import { Button } from "@mui/joy"
import Typography from "@mui/joy/Typography"

export default function TableOfQuestions({ theme }: { theme: string }) {
    const currentState = useAppSelector((s) => s.gameState.currentState)

    const state = currentState as RoundStateData
    const questions: number[] = state.Questions[theme]


    return <>
        {questions.map((q) => (
            <td key={q} style={{ borderRightWidth: 0, padding: 0 }}>
                <Button
                    component="label"
                    variant="plain"
                    sx={{
                        width: '100%',
                        height: '100%',
                        p: 0
                    }}
                >
                    <Typography
                        sx={theme => ({
                            wordWrap: 'break-word',
                            color: theme.vars.palette.primary.plainColor
                        })}
                        fontWeight={700}
                        fontSize={'1.5vw'}>
                        {q}
                    </Typography>
                </Button>
            </td>
        ))}
    </>
}