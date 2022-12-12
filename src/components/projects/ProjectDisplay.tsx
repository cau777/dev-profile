import {Component, For, Show} from "solid-js";
import {Project} from "~/components/projects/projects-fetching";

// TODO: base href
//  TODO: links
export const ProjectDisplay: Component<Project> = (props) => {
    return (
        <article class={"flex flex-col xl:flex-row gap-2 min-h-[30rem]"}>
            <div>
                <div class={"xl:mr-8 flex"}>
                    <div class={"border-box p-2"}>
                        <img src={props.image} alt={"Project screenshot"} class={"max-w-md"}/>
                    </div>
                </div>
            </div>
            <div>
                <h3 class={"text-xl text-primary-300 font-semibold"}>{props.project_title}</h3>
                <p class={"text-gray-100"}>{props.description}</p>
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
                            <a class={"border-2 border-primary-400 px-2 py-1 rounded bg-gray-700"} target={"_blank"}
                               href={props.link_to_project}>Check Demo</a>
                        </div>
                    </Show>
                    
                    <Show when={props.link_to_source_code !== undefined} keyed={false}>
                        <div>
                            <a class={"border-2 border-primary-400 px-2 py-1 rounded bg-gray-700"} target={"_blank"}
                               href={props.link_to_source_code}>Check Source</a>
                        </div>
                    </Show>
                </div>
            </div>
        </article>
    )
}