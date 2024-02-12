import { Box, Typography } from "@mui/joy";

export default function RoundThemes() {
  const numberOfRound = "1";
  const mockThems = [
    {
      id: 1,
      title: "Randome questions",
    },
    {
      id: 2,
      title: "Cars",
    },
    {
      id: 3,
      title: "Flowers",
    },
    {
      id: 4,
      title: "Movies",
    },
    {
      id: 5,
      title: "Sports",
    },
    {
      id: 6,
      title: "Flags",
    },
    {
      id: 7,
      title: "History",
    },
    {
      id: 11,
      title: "Randome questions",
    },
    {
      id: 22,
      title: "Cars",
    },
    {
      id: 33,
      title: "Flowers",
    },
    {
      id: 44,
      title: "Movies",
    },
    {
      id: 55,
      title: "Sports",
    },
    {
      id: 66,
      title: "Flags",
    },
    {
      id: 77,
      title: "History",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Box>
        <Typography
          padding={0}
          textAlign={"center"}
          color="primary"
          fontWeight={"700"}
          fontSize={"3vw"}
          variant="plain"
        >
          {numberOfRound} Round
        </Typography>
      </Box>
      <Box>
        <Typography
          padding={0}
          textAlign={"center"}
          color="primary"
          fontWeight={"500"}
          fontSize={"1.5vw"}
          variant="plain"
        >
          Themes:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "2vh",
          px: "50px",
          flexDirection: "column",
          flexWrap: "wrap",
          maxHeight: "450px",
        }}
      >
        {mockThems.map((theme) => {
          return (
            <Typography
              color="success"
              fontWeight={600}
              fontSize={"1.5vw"}
              key={theme.id}
              textAlign={"center"}
              width={"fit-content"}
            >
              - {theme.title}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}
