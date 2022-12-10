import {Component, ParentProps} from "solid-js";
import {Header} from "~/components/nav-controls/Header";
import {LinksSocial} from "./LinksSocial";

export const NavControls: Component<ParentProps> =(props) => {
    return (
        <div class={"nav-grid mobile-nav-grid md:desktop-nav-grid"}>
            {/*TODO: logo*/}
            <div>Cauã Rinaldi</div>
            <Header></Header>
            <LinksSocial></LinksSocial>
            <div class={"w-full"}>
                {props.children}
            </div>
        </div>
    )
}