import { CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";

type TPLayerTimerProps = {
    initialVal: number
    step: number
}

export default function PlayerTimer(props: TPLayerTimerProps) {
    const [milisec, setMilisec] = useState(props.initialVal);
    const converter = (curr: number, targ: number) => {
        return (1 - curr / targ) * 100;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setMilisec((prev) => (prev <= 0 ? props.initialVal : prev - props.step));
        }, props.step);

        console.log()
        return () => {
            clearInterval(timer);
        };
    }, [props.initialVal, props.step]);

    return <>
        <CircularProgress
            determinate
            variant="soft"
            value={converter(milisec, props.initialVal)}
            size="lg"
            sx={theme => ({
                color: theme.vars.palette.primary[700],
                position: 'absolute',
                zIndex: '10',
                marginTop: "-25%",
                "--CircularProgress-size": "80px",
                "--CircularProgress-trackThickness": "14px",
                "--CircularProgress-progressThickness": "10px",
            })}
        />
    </>
}