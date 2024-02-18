import { Button } from "@mui/joy";

export default function ReadyORStartBtn({ text }: { text: string }) {
    return (
        <Button
            variant="soft"
            color="neutral"
            sx={{
                height: "80px",
                width: "600px",
                ":hover": {
                    color: 'rgb(38, 38, 38)',
                    backgroundColor: "rgb(209, 209, 209)",
                }
            }}>
            <h1 style={{ fontWeight: '900', }}>{text}</h1>
        </Button>
    )
}