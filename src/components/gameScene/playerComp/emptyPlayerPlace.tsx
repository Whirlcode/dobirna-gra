import { Button, Card, Typography } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";

export default function EmptyPlayerPLace() {
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
                    Sit as Player
                </Typography>
            </Card>
        </>
    )
}