import { Button, Card, Typography } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import hubController from '@app/SignalR/HubController'

export default function EmptyAdminPlace() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "330px",
          width: "250px",
          alignItems: "center",
          padding: "5px",
          borderRadius: "25px",
          gap: 0,
        }}>
        <Button
          onClick={() => hubController.seatMaster()}
          sx={{
            p: 0,
            height: "100%",
            width: "100%",
            ":hover": { backgroundColor: "rgba(187, 222, 251, 0.3)" },
            borderRadius: "25px",
          }}
          component="label"
          variant="plain"
          color="neutral">
          <AddIcon sx={{ height: "100%", width: "100%" }} />
        </Button>
        <Typography fontWeight={"700"} fontSize={"3vh"}>
          Sit as admin
        </Typography>
      </Card>
    </>
  );
}
