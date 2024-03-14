import { RoundStateData } from "@app/SignalR/MessageTypes";
import { Box, Table, Typography } from "@mui/joy";
import TableOfQuestions from "@app/components/gameScene/TableOfQuestions";
import { keyframes } from "@mui/styled-engine";

type RaundProps = {
  raundQuestions: RoundStateData['Questions']
}

const slideTable = keyframes`
 0% {
  transform: translateZ(600px);
  opacity: 0;
  }
 100% {
  transform: translateZ(0);
  opacity: 1;
  }
`

export default function RaundThemes(props: RaundProps) {

  const themes: string[] = []

  for (const theme in props.raundQuestions) {
    themes.push(theme)
  }

  return (
    <Box
      sx={{
        animation: `${slideTable} 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Table
        sx={{
          '& tr > *:not(:first-of-type)': { textAlign: 'center' },
          height: '100%'
        }}
        borderAxis="bothBetween"
        size="lg"
        variant="plain"
      >
        <tbody>
          {themes.map((theme, idx) => (
            <tr key={`themes-${idx}`}>
              <td>
                <Typography
                  sx={theme => ({
                    wordWrap: 'break-word',
                    color: theme.vars.palette.primary.solidBg
                  })}
                  fontWeight={700}
                  fontSize={'1.5vw'}
                >
                  {theme}
                </Typography>
              </td>
              <TableOfQuestions theme={theme} />
            </tr>
          ))}
        </tbody></Table>
    </Box>
  );
}
