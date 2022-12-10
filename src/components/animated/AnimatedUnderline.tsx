import {Component, ParentProps} from "solid-js";
import {useObserver} from "~/utils/intersection";

export const AnimatedUnderline: Component<ParentProps> = (props) => {
    let {visible, ref} = useObserver(0.8, false);
    return (
        <u class={"animate-underline"} ref={ref} classList={{visible: visible()}}>{props.children}</u>
    )
}