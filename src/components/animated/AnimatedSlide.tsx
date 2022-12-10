import {Component, ParentProps} from "solid-js";
import {useObserver} from "~/utils/intersection";

export const AnimatedSlide: Component<ParentProps> = (props) => {
    let {ref, visible} = useObserver(0.2);
    
    return (
        <div ref={ref} class={"animate-slide"} classList={{visible: visible()}}>
            {props.children}
        </div>
    )
}