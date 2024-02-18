import Box from "@mui/joy/Box";

export default function DefaultBackground() {
  return (
    <>
      <Box
        sx={(theme) => ({
          height: "100vh",
          width: "100vw",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          left: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1634153570366-deda92ecf625?auto=format&w=1000&dpr=2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?auto=format&w=1000&dpr=2)",
          },
        })}
      />
      <Box
        color="transparent"
        sx={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          left: 0,
          backdropFilter: "blur(60px)",
        }}
      />
    </>
  );
}
