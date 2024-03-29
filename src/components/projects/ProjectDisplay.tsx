import {Component, For, Show} from "solid-js";
import {Project} from "~/components/projects/Projects";
import {A} from "solid-start";
import {useT} from "~/components/LanguagesContext";

export const ProjectDisplay: Component<Project> = (props) => {
    let t = useT();
    
    return (
        <article class={"flex flex-col xl:flex-row gap-2 min-h-[30rem]"}>
            <div class={"xl:mr-8 xl:w-[30rem] xl:grow-0 xl:shrink-0"}>
                <div class={"flex xl:w-full"}>
                    <div class={"border-box p-2 max-w-md xl:max-w-max xl:w-full"}>
                        <img src={props.image} alt={"Project screenshot"} width={"100%"}/>
                    </div>
                </div>
            </div>
            <div class={"min-w-0"}>
                <h3 class={"text-xl text-primary-300 font-semibold"}>{props.project_title}</h3>
                <p class={"text-gray-100"}>
                    {/* @ts-ignore */}
                    {t[props.description]}
                </p>
                <div class={"flex gap-2 flex-wrap mt-2"}>
                    <For each={props.highlighted_technologies}>{o => (
                        <div class={"rounded-xl border-2 border-gray-600 bg-gray-700 px-2 text-secondary-300"}>{o}</div>
                    )}</For>
                    
                    <For each={props.other_technologies}>{o => (
                        <div class={"rounded-xl border-2 border-gray-600 bg-gray-700 px-2 "}>{o}</div>
                    )}</For>
                
                </div>
                
                <div class={"text-primary-300 mt-5 flex flex-wrap gap-2"}>
                    <Show when={props.link_to_project !== undefined} keyed={false}>
                        <div>
                            <A class={"border-2 border-primary-400 px-2 py-1 rounded bg-gray-700"} target={"_blank"}
                               href={props.link_to_project!}>{t.checkDemo}</A>
                        </div>
                    </Show>
                    
                    <Show when={props.link_to_source_code !== undefined} keyed={false}>
                        <div>
                            <A class={"border-2 border-primary-400 px-2 py-1 rounded bg-gray-700"} target={"_blank"}
                               href={props.link_to_source_code!}>{t.checkSource}</A>
                        </div>
                    </Show>
                </div>
            </div>
        </article>
    )
}