import {Component, createResource, Show} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {AnimatedSlide} from "~/components/animated/AnimatedSlide";
import {SkillChart} from "~/components/languages/SkillChart";

// TODO: translate
async function registerChart() {
    // @ts-ignore
    let mod = await import("@codersrank/skills-chart");
    if (window.customElements.get("codersrank-skills-chart") === undefined)
        window.customElements.define("codersrank-skills-chart", mod.default);
    return true;
}

export const LanguagesSection: Component = () => {
    let [registered] = createResource(registerChart);
    
    return (
        <section class={"mb-12"}>
            <SectionTitle title={"languages"}></SectionTitle>
            <Show when={registered()} keyed={false}>
                <AnimatedSlide>
                    <SkillChart></SkillChart>
                </AnimatedSlide>
            </Show>
        </section>
    )
}