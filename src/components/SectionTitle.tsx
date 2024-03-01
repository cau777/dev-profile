import {Component} from "solid-js";
import {useObserver} from "~/utils/intersection";
import {useT} from "~/components/LanguagesContext";

type Props = {
    title: string;
}

export const SectionTitle: Component<Props> = (props) => {
    let {ref, visible} = useObserver(0.7);
    let t = useT();
    
    return (
        <h3 id={props.title} class={"text-center capitalize font-semibold text-3xl text-primary-300 mb-4 animate-fade"} ref={ref} classList={{visible: visible()}}>
            {/* @ts-ignore */}
            {t[props.title]}
        </h3>
    )
}