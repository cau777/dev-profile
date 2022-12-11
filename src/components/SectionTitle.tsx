import {Component} from "solid-js";
import {t} from "~/i18n/i18n-config";
import {useObserver} from "~/utils/intersection";

type Props = {
    title: string;
}

export const SectionTitle: Component<Props> = (props) => {
    let {ref, visible} = useObserver(0.7);
    
    return (
        <h3 id={props.title} class={"text-center capitalize font-semibold text-2xl text-primary-300 mb-4 animate-fade"} ref={ref} classList={{visible: visible()}}>{t(props.title)}</h3>
    )
}