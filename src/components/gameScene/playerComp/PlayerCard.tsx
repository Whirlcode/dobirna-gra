import { useAppSelector } from "@app/Store";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  Input,
  Tooltip,
  Typography,
} from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import hubController from "@app/SignalR/HubController";
import DefaultUserImage from '@app/assets/maxresdefault.jpg'

type TPlayerCardData = {
  initialVal: number;
  step: number;
  playerName: string;
  scoreOfPlace: number;
  indexOfPlace: number;
  imgId: string;
}

export default function PlayerCard({
  initialVal,
  step,
  playerName,
  scoreOfPlace,
  indexOfPlace,
  imgId
}: TPlayerCardData) {
  const [milisec, setMilisec] = useState(initialVal);
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const amMaster = useAppSelector((s) => s.gameState.amMaster);
  const playerPoints = useRef<number>(0);

  const converter = (curr: number, targ: number) => {
    return (1 - curr / targ) * 100;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setMilisec((prev) => (prev <= 0 ? initialVal : prev - step));
    }, step);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <Badge
        invisible={true}
        variant="plain"
        badgeInset="0 5%"
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            boxShadow: "none",
          },
        }}
        badgeContent={
          <CircularProgress
            determinate
            value={converter(milisec, initialVal)}
            size="lg"
            sx={{
              "--CircularProgress-size": "80px",
              "--CircularProgress-trackThickness": "14px",
              "--CircularProgress-progressThickness": "5px",
            }}
          />
        }
      >
        <Card
          sx={{
            display: "flex",
            minWidth: "150px",
            maxWidth: "190px",
            height: "250px",
            alignItems: "center",
            padding: "5px",
            borderRadius: "5px",
            gap: 0,
            border: 0,
            ...(openContextMenu && { boxShadow: "0px 0px 20px 10px aqua" }),
          }}
        >
          {openContextMenu && (
            <Box
              sx={{
                position: "absolute",
                bottom: "280px",
                zIndex: 10
              }}
            >
              <Input
                onChange={(e) => (playerPoints.current = +e.target.value)}
                sx={{
                  minHeight: 60,
                  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                  {
                    "WebkitAppearance": "none",
                    margin: 0,
                  },
                  "input[type=number]": {
                    "MozAppearance": "textfield",
                  },
                }}
                type="number"
                size="lg"
                placeholder="Set Points"
                endDecorator={
                  <Button
                    onClick={() => {
                      setOpenContextMenu(false);
                      hubController.changeScore(indexOfPlace, playerPoints.current)
                    }}
                  >
                    Save
                  </Button>
                }
              />
            </Box>
          )}
          <AspectRatio minHeight={170} sx={{ minWidth: 170, borderRadius: "5px", }}>
            <img src={imgId === '' ? DefaultUserImage : `${import.meta.env.VITE_API}/asset/profile/get/${imgId}`}
              loading="lazy"
              alt="" />
          </AspectRatio>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
            }}
          >
            <Tooltip title={playerName} size="md">
              <Typography
                variant="plain"
                sx={{
                  padding: "0px 10px",
                  textAlign: "center",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: "1.2vw",
                  fontWeight: "700",
                }}
              >
                {playerName}
              </Typography>
            </Tooltip>

            <Divider
              sx={{ border: "1px solid white", margin: 0, padding: 0 }}
              orientation="horizontal"
            />
            <Typography
              variant="plain"
              sx={{
                textAlign: "center",
                margin: 0,
                padding: 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontSize: "1.2vw",
                maxWidth: 250,
              }}
            >
              {scoreOfPlace}
            </Typography>
          </Box>
          {amMaster &&
            <Button
              onClick={() => setOpenContextMenu((v) => !v)}
              sx={{
                position: "absolute",
                p: 0,
                height: 170,
                width: 170,
                ":hover": { backgroundColor: "rgba(187, 222, 251, 0.3)" },
              }}
              component="label"
              variant="plain"
              color="neutral"
            ></Button>}
        </Card>
      </Badge>
    </>
  );
}
