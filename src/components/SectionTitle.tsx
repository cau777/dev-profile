import {Component} from "solid-js";
import {t} from "~/i18n/i18n-config";

type Props = {
    title: string;
}

export const SectionTitle: Component<Props> = (props) => {
    return (
        <h3 id={props.title} class={"text-center capitalize font-semibold text-2xl text-primary-300 mb-4"}>{t(props.title)}</h3>
    )
}