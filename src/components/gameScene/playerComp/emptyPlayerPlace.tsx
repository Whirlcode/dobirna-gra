import { Button, Card, Typography } from "@mui/joy";
import hubController from '@app/SignalR/HubController'
import { useAppSelector } from "@app/Store";

export default function EmptyPlayerPlace({ seatIdx }: { seatIdx: number }) {
    const Places = useAppSelector(s => s.gameState.lobby?.Places[seatIdx])
    const amMaster = useAppSelector(s => s.gameState.amMaster)
    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: 'center',
                    minWidth: "190px",
                    maxWidth: "190px",
                    height: "250px",
                    alignItems: "center",
                    padding: 0,
                    gap: 0,
                    border: 0
                }}>
                <Button
                    disabled={amMaster}
                    onClick={() => hubController.seat(seatIdx)}
                    sx={{
                        p: 0,
                        height: "100%",
                        width: "100%",
                        ":hover": { backgroundColor: "rgba(187, 222, 251, 0.3)" },
                        position: 'absolute'
                    }}
                    component="label"
                    variant="plain"
                    color="neutral">
                </Button>
                <Typography fontWeight={"600"} fontSize={"2.5vh"}>
                    {Places!.Score}
                </Typography>
            </Card>
        </>
    )
}