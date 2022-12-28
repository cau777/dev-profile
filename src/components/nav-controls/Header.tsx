import {Component, For} from "solid-js";
import {A} from "solid-start";
import {useT} from "~/components/LanguagesContext";

const SECTIONS = ["aboutMe", "education", "courses", "projects", "languages"];

export const Header: Component = () => {
    let t = useT();
    
    return (
        <div class={"md:overflow-hidden"}>
            <div class={"container mt-5"}>
                <div class={"flex align-middle relative flex-wrap"}>
                    <div class={"md:ml-auto"}></div>
                    
                    <For each={SECTIONS}>{(o) => {
                        // @ts-ignore
                        let name = t[o];
                        return (
                            <div class={"grid-center text-gray-100 mr-4 cursor-pointer"}>
                                <a title={name} onClick={() => document.getElementById(o)?.scrollIntoView({behavior: "smooth"})}>
                                    {name}
                                </a>
                            </div>
                        );
                    }}</For>
                    
                    <A class={"text-sm text-gray-100"} href={import.meta.env.BASE_URL + "pt"}>PT</A>
                    <span class={"mx-1"}>|</span>
                    <A class={"text-sm text-gray-100"} href={import.meta.env.BASE_URL + "en"}>EN</A>
                    
                    <div class={"absolute -right-6 translate-x-full translate-y-3 hidden md:block"}>
                        <div class={"border-primary-500 border-[2px] rounded-l h-[4px] w-[100rem]"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}