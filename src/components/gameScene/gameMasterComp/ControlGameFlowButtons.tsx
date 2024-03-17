import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import KeyboardTabRoundedIcon from '@mui/icons-material/KeyboardTabRounded';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/Store';
import { pauseTimer } from '@app/features/timerState/timerStateSlice';
import { Button, ButtonGroup, Tooltip } from '@mui/joy';
import ModalForSkipRound from '@app/components/gameScene/gameMasterComp/ModalForSkipRound';


export default function ControlGameFlowButtons() {
    const [openModalSkipRound, setOpenModalSkipRound] = useState(false)
    const isPausedTimer = useAppSelector(s => s.timeState.isPausedTimer)
    const dispatch = useAppDispatch()

    const handlePauseClick = () => {
        dispatch(pauseTimer())
    }

    return (
        <>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical solid button group"
                variant="soft"
                size="lg"
                sx={{ '--ButtonGroup-separatorColor': 'rgba(160, 234, 255, 0.5)' }}
            >
                <Tooltip placement="left" size="lg" title="Pause / Unpause">
                    <Button key="pause" sx={{ height: "4vw", padding: '0' }} onClick={handlePauseClick}>
                        {isPausedTimer
                            ?
                            <PlayArrowRoundedIcon color="success" sx={{ fontSize: '50px' }} />
                            :
                            <PauseRoundedIcon color="success" sx={{ fontSize: '50px' }} />
                        }
                    </Button>
                </Tooltip>
                <Tooltip placement="left" size="lg" title="Skip question">
                    <Button key="skipQuestion" sx={{ height: "4vw", padding: '0' }}>
                        <SkipNextRoundedIcon color="warning" sx={{ fontSize: '50px' }} />
                    </Button>
                </Tooltip>
                <Tooltip placement="left" size="lg" title="Skip Round">
                    <Button onClick={() => setOpenModalSkipRound((v) => !v)} key="skipRound" sx={{ height: "4vw", padding: '0' }}>
                        <KeyboardTabRoundedIcon sx={{ fontSize: '50px', color: 'rgb(255, 86, 86)' }} />
                    </Button>
                </Tooltip>
            </ButtonGroup>
            <ModalForSkipRound open={openModalSkipRound} />
        </>
    )
}