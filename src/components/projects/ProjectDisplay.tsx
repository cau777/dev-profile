import {Component, For} from "solid-js";
import {Project} from "~/components/projects/projects-fetching";

export const ProjectDisplay: Component<Project> = (props) => {
    return (
        <article class={"flex flex-col lg:flex-row gap-2"}>
            <div class={"md:mr-8 flex"}>
                <div class={"border-box p-2"}>
                    <img src={props.image} alt={"Project screenshot"} class={"max-w-md"}/>
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
            </div>
        </article>
    )
}