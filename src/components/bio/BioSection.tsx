import {Component, createSignal} from "solid-js";
import {AnimatedUnderline} from "~/components/animated/AnimatedUnderline";
import picture from "../../../img/MyPicture.jpeg";
import {ChevronDownIcon} from "~/components/icons/ChevronDownIcon";
import {useT} from "~/components/LanguagesContext";

// TODO: pattern to occupy space???

export const BioSection: Component = () => {
    let [chevronVisible, setVisible] = createSignal(window.innerWidth > 600);
    let t = useT();
    
    const onScroll = () => {
        setVisible(false);
        window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll);
    
    return (
        <section class={"flex mt-10 flex-col md:flex-row min-h-screen"}>
            <div class={"mr-10"}>
                <img class={"h-auto border-2"} src={picture} width={256} height={170}
                     alt={"A picture of me with my arms crossed"}/>
            </div>
            
            <header>
                <h1 class={"text-primary-300 font-semibold text-xl mb-1 mt-3"}>
                    {t.greeting}
                </h1>
                <div class={"text-5xl font-bold max-w-lg leading-snug"}>
                    {t.description(AnimatedUnderline, AnimatedUnderline)}
                </div>
                <p class={"mt-12 text-gray-100 max-w-lg"}>
                    {t.subtitle(props => <span class={"text-secondary-200"}>{props.children}</span>)}
                </p>
            </header>
            
            <button class={"fixed text-gray-50 left-1/2 bottom-5 cursor-pointer transition-all opacity-0 duration-150"}
                    classList={{"opacity-100": chevronVisible()}}
                    onClick={() => window.scrollBy({top: 350, behavior: "smooth"})}>
                <ChevronDownIcon width={"2rem"}></ChevronDownIcon>
            </button>
        </section>
    )
}