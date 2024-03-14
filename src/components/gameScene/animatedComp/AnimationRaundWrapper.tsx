
type ChildrenProps = {
    children: React.ReactNode[]
    idx: number
}

export default function AnimationRaundWrapper(props: ChildrenProps) {
    return <>
        {props.children[props.idx]}
    </>

}