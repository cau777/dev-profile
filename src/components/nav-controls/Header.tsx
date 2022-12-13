import {Component, For} from "solid-js";
import {changeLanguage, t} from "~/i18n/i18n-config";
import {A} from "solid-start";

const SECTIONS = ["aboutMe", "education", "courses", "projects", "languages"];

export const Header: Component = () => {
    return (
        <div class={"overflow-hidden"}>
            <div class={"container mt-5"}>
                <div class={"flex align-middle relative"}>
                    {/*<div class={"text-primary-200 font-bold text-lg"}>Cauã Rinaldi</div>*/}
                    
                    <div class={"ml-auto"}></div>
                    
                    {/*<div class={"grow grid-center"}>*/}
                    {/*    <div class={"border-primary-500 border-[2px] rounded-l h-[4px] w-full"}></div>*/}
                    {/*</div>*/}
                    
                    <For each={SECTIONS}>{(o) => {
                        return (
                            <div class={"grid-center text-gray-100 mr-4"}>
                                <A href={"#" + o}>
                                    {t(o)}
                                </A>
                            </div>
                        );
                    }}</For>
                    
                    <button class={"text-sm text-gray-100"} onClick={() => changeLanguage("pt-BR")}>PT</button>
                    <span class={"mx-1"}>|</span>
                    <button class={"text-sm text-gray-100"} onClick={() => changeLanguage("en")}>EN</button>
                    
                    <div class={"absolute -right-6 translate-x-full translate-y-3 hidden md:block"}>
                        <div class={"border-primary-500 border-[2px] rounded-l h-[4px] w-[100rem]"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}