import hubController from "@app/SignalR/HubController";
import { Button, Typography } from "@mui/joy";

export default function ReadyORStartBtn({ text }: { text: string }) {
    const handleReadyStartClick = () => {
        hubController.interact()
    }

    return (
        <Button
            onClick={handleReadyStartClick}
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
            <Typography level="h1">{text}</Typography>
        </Button>
    )
}