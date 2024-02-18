import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  ModalClose,
  Sheet,
} from "@mui/joy";
import Drawer from "@mui/joy/Drawer";
import Menu from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoundSlide from "@app/components/gameScene/shared/SoundSlide";


import hubController from "@app/SignalR/HubController";

export default function DrawerMain() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ position: "absolute", right: 0, top: 0, m: 1 }}>
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor="right"
          size="md"
          variant="plain"
          onClose={() => setOpen((v) => !v)}
          open={open}
          slotProps={{
            content: {
              sx: {
                bgcolor: "transparent",
                p: { md: 3, sm: 0 },
                boxShadow: "none",
              },
            },
          }}
        >
          <Sheet
            sx={{
              borderRadius: "md",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
              overflow: "auto",
            }}
          >
            <ModalClose />
            <DialogTitle>Settings </DialogTitle>
            <DialogContent sx={{ display: "flex", gap: 2 }}>
              <SoundSlide />
            </DialogContent>
            <Box
              sx={{
                display: "flex",
                marginTop: "auto",
                justifyContent: "center",
              }}
            >
              <div>
                <Button
                  sx={{ width: "400px" }}
                  onClick={() => {
                    hubController.leaveLobby();
                  }}
                >
                  Exit
                </Button>
              </div>
            </Box>
          </Sheet>
        </Drawer>
      </Box>
    </>
  );
}
