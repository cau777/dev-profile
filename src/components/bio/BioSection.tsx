import {Component, createSignal, onCleanup, onMount} from "solid-js";
import {AnimatedUnderline} from "~/components/animated/AnimatedUnderline";
import picture from "../../../img/MyPicture.jpeg";
import {ChevronDownIcon} from "~/components/icons/ChevronDownIcon";
import {useT} from "~/components/LanguagesContext";

// TODO: pattern to occupy space???

export const BioSection: Component = () => {
    let [chevronVisible, setVisible] = createSignal(false);
    let t = useT();
    
    onMount(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("scroll", onScroll);
        setVisible(window.innerWidth > 600);
    });
    onCleanup(() => {
        if (typeof window === "undefined") return;
        window.removeEventListener("scroll", onScroll);
    });

    const onScroll = () => {
        if (typeof window === "undefined") return;
        setVisible(false);
        window.removeEventListener("scroll", onScroll);
    };
    
    return (
        <section class={"flex mt-10 mb-12 md:mb-0 flex-col md:flex-row min-h-screen"}>
            <div class={"mr-10"}>
                <img class={"h-auto border-2"} src={picture} width={256} height={384}
                     alt={"A picture of me with my arms crossed"}/>
            </div>
            
            <header>
                <h1 class={"text-primary-300 font-semibold text-xl mb-1 mt-3"}>
                    {t.greeting}
                </h1>
                <div class={"text-3xl md:text-5xl font-bold max-w-lg leading-snug"}>
                    {t.description(AnimatedUnderline, AnimatedUnderline)}
                </div>
                <div class={"mt-12 text-gray-100 max-w-lg"}>
                    {t.subtitle(props => <span class={"text-secondary-200"}>{props.children}</span>)}
                </div>
            </header>
            
            <button class={"fixed text-gray-50 left-1/2 bottom-5 cursor-pointer transition-all opacity-0 duration-150"}
                    classList={{"opacity-100": chevronVisible()}} title={t.scrollDown}
                    onClick={() => window.scrollBy({top: 350, behavior: "smooth"})}>
                <ChevronDownIcon width={"2rem"}></ChevronDownIcon>
            </button>
        </section>
    )
}
