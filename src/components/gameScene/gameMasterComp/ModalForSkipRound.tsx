import { Box, Button, ButtonGroup, Snackbar, Typography } from "@mui/joy";

export default function ModalForSkipRound({ open }: { open: boolean }) {
    return <>
        <Snackbar
            variant="soft"
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            open={open}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '200px',
                padding: '20px',
                justifyContent: 'space-evenly'
            }}>
            <Box>
                <Typography level="h2">Do you want to skip this round?</Typography>
            </Box>
            <Box>
                <ButtonGroup
                    sx={{ width: '500px' }}
                    buttonFlex={1}
                    aria-label="flex button group"
                >
                    <Button sx={{
                        ":hover": { boxShadow: "0px 0px 20px 10px rgb(130, 255, 146)" },
                        fontSize: '18px'
                    }}
                        color="success"
                        variant="soft"
                    >Yes
                    </Button>
                    <Button sx={{
                        ":hover": { boxShadow: "0px 0px 20px 10px rgb(255, 112, 112)" },
                        fontSize: '18px'
                    }}
                        color="danger"
                        variant="soft"
                    >No
                    </Button>
                </ButtonGroup>
            </Box>
        </Snackbar>
    </>
}