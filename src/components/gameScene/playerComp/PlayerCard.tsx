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

import { IdleStateData, PlayerPlaceData, RoundStateData } from "@app/SignalR/MessageTypes";

type TPlayerCardData = {
  initialVal: number;
  step: number;
  indexOfPlace: number;
  user: PlayerPlaceData
}

export default function PlayerCard({
  initialVal,
  step,
  indexOfPlace,
  user
}: TPlayerCardData) {
  const [milisec, setMilisec] = useState(initialVal);
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const amMaster = useAppSelector((s) => s.gameState.amMaster);
  const currentState = useAppSelector((s) => s.gameState.currentState)
  const playerPoints = useRef<number>(0);

  let highlightingOn = false;

  if (currentState?.Type == IdleStateData.getType()) {
    const state = currentState as IdleStateData;
    const isReady = state.ReadyUsers.includes(user?.UserId)
    highlightingOn = isReady;
  }

  if (currentState?.Type == RoundStateData.getType()) {
    const state = currentState as RoundStateData;
    highlightingOn = state.Electioneer == user?.UserId;
  }

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
          sx={theme => ({
            display: "flex",
            minWidth: "190px",
            maxWidth: "190px",
            height: "250px",
            alignItems: "center",
            padding: "5px",
            borderRadius: "5px",
            gap: 0,
            border: 0,
            ...(openContextMenu && { boxShadow: `0px 0px 20px ${theme.vars.palette.danger[500]}` }),
            ...(highlightingOn && { outline: `4px solid ${theme.vars.palette.success[600]}` }),
          })}
        >
          {openContextMenu && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: 'fit-content',
                gap: "5px",
                position: "absolute",
                bottom: "280px",
                zIndex: 10
              }}
            >
              <Input
                onChange={(e) => (playerPoints.current = +e.target.value)}
                sx={{
                  minHeight: 65,
                  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                  {
                    "WebkitAppearance": "none",
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
                    size="lg"
                    onClick={() => {
                      setOpenContextMenu(false);
                      hubController.changeScore(indexOfPlace, playerPoints.current)
                    }}
                  >
                    Save
                  </Button>
                }
              />
              <Button onClick={() => hubController.removePlace(indexOfPlace)}>Remove place</Button>
            </Box>
          )}
          <AspectRatio minHeight={170} sx={{ minWidth: "180px", borderRadius: "5px", }}>
            <img src={user.ImageId === '' ? DefaultUserImage : `${import.meta.env.VITE_API}/asset/profile/get/${user.ImageId}`}
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
            <Tooltip title={user.UserName} size="md">
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
                {user.UserName}
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
              {user.Score}
            </Typography>
          </Box>
          {amMaster &&
            <Button
              onClick={() => setOpenContextMenu((v) => !v)}
              sx={{
                position: "absolute",
                p: 0,
                height: 170,
                width: "180px",
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
