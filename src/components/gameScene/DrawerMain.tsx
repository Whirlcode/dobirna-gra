import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  ModalClose,
  Sheet,
  Typography,
} from "@mui/joy";
import Drawer from "@mui/joy/Drawer";
import Menu from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import SoundSlide from "@app/components/gameScene/shared/SoundSlide";


import hubController from "@app/SignalR/HubController";
import { useAppSelector } from "@app/Store";

export default function DrawerMain() {
  const [open, setOpen] = useState(false);
  const Places = useAppSelector(s => s.gameState.lobby?.Places)
  const amMaster = useAppSelector(s => s.gameState.amMaster)
  const numberOfTables = useRef<number>(Places?.length ?? 0)

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
              {amMaster && <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <Typography fontWeight={700}>
                  Number of Tables
                </Typography>
                <Input
                  sx={{
                    "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                    {
                      "WebkitAppearance": "none", margin: 0
                    },
                    "input[type=number]": {
                      "MozAppearance": "textfield"
                    }
                  }}
                  variant="outlined"
                  placeholder={`${Places!.length}`}
                  endDecorator={
                    <Button onClick={() => hubController.setNumberPlaces(numberOfTables.current)}>
                      Enter
                    </Button>
                  }
                  type="number"
                  onChange={(e) => numberOfTables.current = +e.target.value}
                />
              </Box>}

            </DialogContent>
            <Box
              sx={{
                display: "flex",
                marginTop: "auto",
                justifyContent: "center",
              }}>
              <Button
                sx={{ width: "400px" }}
                onClick={() => {
                  hubController.leaveLobby();
                }}>
                Exit
              </Button>
            </Box>
          </Sheet>
        </Drawer>
      </Box>
    </>
  );
}
