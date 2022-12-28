import {Component, createEffect, createSignal, Show} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {AnimatedSlide} from "~/components/animated/AnimatedSlide";
import {SkillChart} from "~/components/languages/SkillChart";
import {useT} from "~/components/LanguagesContext";

async function registerChart() {
    // @ts-ignore
    let mod = await import("@codersrank/skills-chart");
    if (window.customElements.get("codersrank-skills-chart") === undefined)
        window.customElements.define("codersrank-skills-chart", mod.default);
    return true;
}

export const LanguagesSection: Component = () => {
    let [ready, setReady] = createSignal(false);
    let t = useT();
    
    createEffect(() => {
        registerChart().then(() => setReady(true));
    });
    
    return (
        <section class={"mb-12"}>
            <SectionTitle title={"languages"}></SectionTitle>
            <p class={"text-center text-gray-100"}>{t.languagesDescription}</p>
            <Show when={ready()} keyed={false}>
                <AnimatedSlide>
                    <SkillChart></SkillChart>
                </AnimatedSlide>
            </Show>
        </section>
    )
}