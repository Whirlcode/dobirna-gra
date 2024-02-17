import { Box, Button, ButtonGroup, Snackbar, Typography } from "@mui/joy";

export default function AnswerControlPanel(open: boolean) {
    return <>
        <Snackbar
            variant="soft"
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            open={open}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '250px',
                padding: '20px',
                justifyContent: 'space-between'
            }}>
            <Box>
                <Typography fontWeight={700} fontSize={'1vw'}>
                    Answering:  <Typography color="primary" fontWeight={700} fontSize={'1vw'}>
                        {'NAME OF PLAYER'}
                    </Typography>
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight={700} fontSize={'1vw'}>
                    Answer is:  <Typography color="success" fontWeight={700} fontSize={'1vw'}>
                        {'THE LONG ASNWER PROBABLY CAN BE LONG STRING LIKE THIS JUST CHEKING'}
                    </Typography>
                </Typography>
            </Box>
            <Box>
                <ButtonGroup
                    buttonFlex={1}
                    sx={{ width: '100%' }}
                >
                    <Button sx={{
                        color: 'white',
                        ":hover": { boxShadow: "0px 0px 20px 10px rgb(130, 255, 146)" },
                        fontSize: '18px'
                    }}
                        color="success"
                        variant="soft"
                    >Correct </Button>
                    <Button sx={{
                        minHeight: '80px',
                        color: 'white',
                        ":hover": { boxShadow: "0px 0px 20px 10px rgb(255, 112, 112)" },
                        fontSize: '18px'
                    }}
                        color="warning"
                        variant="soft"
                    >Skip Player Answer </Button>
                    <Button sx={{
                        color: 'white',
                        ":hover": { boxShadow: "0px 0px 20px 10px rgb(255, 112, 112)" },
                        fontSize: '18px'
                    }}
                        color="danger"
                        variant="soft"
                    >Wrong </Button>

                </ButtonGroup>
            </Box>
        </Snackbar>

    </>
}