import { AspectRatio, Box, Card, Typography } from "@mui/joy";
import { useAppSelector } from "@app/Store";

export default function GameMasterCard() {
  const gameLobby = useAppSelector((s) => s.userInfo.gameLobby);
  return (
    <>
      {gameLobby.map((user) => {
        if (user.isGameMaster) {
          return (
            <>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "325px",
                  maxHeight: "330px",
                  maxWidth: "250px",
                  alignItems: "center",
                  padding: "5px",
                  borderRadius: "25px",
                }}>
                <AspectRatio sx={{ minWidth: "100%" }} minHeight="250px">
                  <img src={user.img} loading="lazy" alt="" />
                </AspectRatio>
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Typography
                    level="h4"
                    variant="plain"
                    textAlign={"center"}
                    sx={{
                      padding: "0px 10px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontSize: "1vw",
                      minWidth: 250,
                    }}>
                    {user.name}
                  </Typography>
                </Box>
                <>
                  <Box
                    sx={{
                      display: "flex",
                      minWidth: "fit-content",
                      maxHeight: "250px",
                      border: "1px solid #ccc",
                      padding: "5px",
                      marginTop: "300px",
                      boxSizing: "border-box",
                      position: "absolute",
                      borderRadius: " inherit",
                      backgroundColor: "black",
                    }}>
                    <Typography
                      sx={{
                        wordBreak: "break-word",
                        overflow: "auto",
                        fontSize: `1vw`,
                        margin: 0,
                      }}>
                      SAMPLE text
                    </Typography>
                  </Box>
                </>
              </Card>
            </>
          );
        }
      })}
    </>
  );
}
/*

<>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "325px",
          maxHeight: "330px",
          maxWidth: "250px",
          alignItems: "center",
          padding: "5px",
          borderRadius: "25px",
        }}
      >
        <AspectRatio sx={{ minWidth: "100%" }} minHeight="250px">
          <img src={defaultImage} loading="lazy" alt="" />
        </AspectRatio>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            level="h4"
            variant="plain"
            sx={{
              padding: "0px 10px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: "1vw",
              minWidth: 250,
            }}
          >
            THE NAME OF GAME MASTER OR ANYTHING ELSE
          </Typography>
        </Box>
        <>
          <Box
            sx={{
              display: "flex",
              minWidth: "fit-content",
              maxHeight: "250px",
              border: "1px solid #ccc",
              padding: "5px",
              marginTop: "300px",
              boxSizing: "border-box",
              position: "absolute",
              borderRadius: " inherit",
              backgroundColor: "black",
            }}
          >
            <Typography
              sx={{
                wordBreak: "break-word",
                overflow: "auto",
                fontSize: `1vw`,
                margin: 0,
              }}
            >
              SAMPLE text
            </Typography>
          </Box>
        </>
      </Card>
    </>
*/
