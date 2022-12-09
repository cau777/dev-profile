import {Component, ParentProps, Show} from "solid-js";
import {i18nLoaded} from "~/i18n/i18n-config";

export const LanguageLoader: Component<ParentProps> = (props) => {
    return (
        <Show when={i18nLoaded()} fallback={"Loading languages"} keyed={false}>
            {props.children}
        </Show>
    )
}