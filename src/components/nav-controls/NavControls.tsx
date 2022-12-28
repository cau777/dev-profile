import {Component, ParentProps} from "solid-js";
import {Header} from "~/components/nav-controls/Header";
import {LinksSocial} from "./LinksSocial";
import {LogoIcon} from "~/components/icons/LogoIcon";

export const NavControls: Component<ParentProps> =(props) => {
    return (
        <div class={"nav-grid desktop-nav-grid"}>
            <div class={"text-primary-400 pt-[0.3rem] pl-4"}>
                <LogoIcon width={"3.5rem"}></LogoIcon>
            </div>
            <Header></Header>
            <LinksSocial></LinksSocial>
            <div class={"col-span-2 md:col-span-1 w-full"}>
                {props.children}
            </div>
        </div>
    )
}