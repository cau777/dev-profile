import {Component} from "solid-js";

type Props = {
    title: string;
}

export const SectionTitle: Component<Props> = (props) => {
    return (
        <h3 class={"text-center capitalize font-semibold text-2xl text-gray-100"}>{props.title}</h3>
    )
}