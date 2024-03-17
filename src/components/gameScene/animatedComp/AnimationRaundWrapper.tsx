import { useAppDispatch } from "@app/Store"
import { toggleShowTimer } from "@app/features/timerState/timerStateSlice"
import { useEffect } from "react"

type ChildrenProps = {
    children: React.ReactNode[]
    idx: number
}

export default function AnimationRaundWrapper(props: ChildrenProps) {
    const dispath = useAppDispatch()

    const isRaundComponentOnScreen = props.children[props.idx] === props.children[props.children.length - 1]

    useEffect(() => {
        if (isRaundComponentOnScreen) {
            dispath(toggleShowTimer())
        }
    }, [dispath, isRaundComponentOnScreen])

    return <>
        {props.children[props.idx]}
    </>

}