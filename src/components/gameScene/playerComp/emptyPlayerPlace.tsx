import { Button, Card, Typography } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import hubController from '@app/SignalR/HubController'
import { useAppSelector } from "@app/Store";

export default function EmptyPlayerPlace({ seatIdx }: { seatIdx: number }) {
    const { lobby } = useAppSelector(s => s.gameState)
    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    minWidth: "150px",
                    maxWidth: "190px",
                    height: "250px",
                    alignItems: "center",
                    padding: 0,
                    gap: 0,
                    border: 0
                }}>
                <Button
                    onClick={() => hubController.seat(seatIdx)}
                    sx={{
                        p: 0,
                        height: "100%",
                        width: "100%",
                        ":hover": { backgroundColor: "rgba(187, 222, 251, 0.3)" },
                    }}
                    component="label"
                    variant="plain"
                    color="neutral">
                    <AddIcon sx={{ height: "100%", width: "100%" }} />
                </Button>
                <Typography fontWeight={"600"} fontSize={"2.5vh"}>
                    {lobby?.Places[seatIdx].Score}
                </Typography>
            </Card>
        </>
    )
}