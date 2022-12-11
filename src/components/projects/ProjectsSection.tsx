import {batch, Component, createEffect, createResource, createSignal, For, Show} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {fetchProjects} from "~/components/projects/projects-fetching";
import {ProjectDisplay} from "~/components/projects/ProjectDisplay";
import {useObserver} from "~/utils/intersection";
import {sleep} from "~/utils/promises";

// TODO: translate
// TODO: arrow buttons (fixed)
// TODO: auto next
export const ProjectsSection: Component = () => {
    let [projects] = createResource(fetchProjects);
    let {ref, visible} = useObserver(0.3);
    let [offset, setOffset] = createSignal(0);
    let [changed, setChanged] = createSignal(false);
    
    const offsetProjects = () => {
        let arr = projects();
        if (arr === undefined) return undefined;
        let off = offset();
        return [...arr.slice(off), ...arr.slice(0, off)];
    }
    
    function addOffset(val: number) {
        let p = projects();
        if (p === undefined) return;
        batch(() => {
            setChanged(false);
            setOffset((offset() + p!.length + val) % p!.length);
        });
    }
    
    createEffect(() => {
        let _ = offset(); // Just creates offset as a dependency
        sleep(50).then(() => setChanged(true)); // Small delay to ensure the browser updates the change
    });
    
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"projects"}></SectionTitle>
            <Show when={!projects.loading} keyed={false}>
                <div ref={ref} classList={{visible: visible()}} class={"animate-fade carousel"}>
                    <button onClick={() => addOffset(-1)}>Prev</button>
                    <div class={"carousel-items"} classList={{changed: changed()}}>
                        <For each={offsetProjects()}>{o => (
                            <ProjectDisplay {...o}></ProjectDisplay>
                        )}</For>
                    </div>
                    <button onClick={() => addOffset(1)}>Next</button>
                </div>
            </Show>
        </section>
    )
}