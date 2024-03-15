import { useState } from "react";
import RaundThemes from "@app/components/gameScene/ShowRoundThemesStage";
import AnimatedScrollForThemes from "@app/components/gameScene/animatedComp/AnimatedScrollForThemes";
import AnimationRaundWrapper from "@app/components/gameScene/animatedComp/AnimationRaundWrapper";
import NameAndNumberOfRaund from "@app/components/gameScene/animatedComp/NameAndNumberOfRaund";
import { useAppSelector } from "@app/Store";
import { RoundStateData } from "@app/SignalR/MessageTypes";
import ThemesOfRaundText from "@app/components/gameScene/animatedComp/ThemesOfRaundText";

export default function AnimationRaund() {
    const currentState = useAppSelector((s) => s.gameState.currentState)
    const [index, setIndex] = useState(0);
    const state = currentState as RoundStateData

    const handleChangeIdx = () => {
        setIndex(i => i + 1)
    }

    return <>
        <AnimationRaundWrapper idx={index}>
            <NameAndNumberOfRaund numberOfRaund={1} changeIdx={handleChangeIdx} />
            <ThemesOfRaundText changeIdx={handleChangeIdx} />
            <AnimatedScrollForThemes questions={state['Questions']} changeIdx={handleChangeIdx} />
            <RaundThemes raundQuestions={state['Questions']} />
        </AnimationRaundWrapper>
    </>
}

