import { Box } from "@mui/joy";

export default function PlayersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          padding: "10px",
          borderRadius: 25,
          height: "100%",
          width: "100%",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {children}
      </Box>
    </>
  );
}
