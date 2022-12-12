import {batch, Component, createResource, createSignal, For, Index, Show} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {fetchProjects} from "~/components/projects/projects-fetching";
import {ProjectDisplay} from "~/components/projects/ProjectDisplay";
import {useObserver} from "~/utils/intersection";
import {ArrowLeftIcon} from "~/components/icons/ArrowLeftIcon";
import {ArrowRightIcon} from "~/components/icons/ArrowRightIcon";
import {FullCircleIcon} from "~/components/icons/FullCircleIcon";

export const ProjectsSection: Component = () => {
    let [projects] = createResource(fetchProjects);
    let {ref, visible} = useObserver(0.3);
    let [prev, setPrev] = createSignal<number>();
    let [current, setCurrent] = createSignal(0);
    
    function addOffset(val: number) {
        let p = projects();
        if (p === undefined) return;
        setCurrentAndPrev((current() + p!.length + val) % p!.length);
    }
    
    function setCurrentAndPrev(newVal: number) {
        batch(() => {
            let c = current();
            if (c !== newVal)
                setPrev(c);
            setCurrent(newVal);
        });
    }
    
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"projects"}></SectionTitle>
            <Show when={!projects.loading} keyed={false}>
                <div ref={ref} classList={{visible: visible()}} class={"animate-fade"}>
                    <div class={"carousel-items"}>
                        <For each={projects()}>{(o, i) => (
                            <div classList={{current: i() === current(), prev: i() === prev()}}>
                                <ProjectDisplay {...o}></ProjectDisplay>
                            </div>
                        )}</For>
                    </div>
                    
                    <div class={"flex justify-center gap-1"}>
                        <button onClick={() => addOffset(-1)}><ArrowLeftIcon width={"1.5rem"}></ArrowLeftIcon></button>
                        <Index each={projects()}>{(_, i) => (
                            <button onClick={() => setCurrentAndPrev(i)}>
                                <FullCircleIcon classList={{"text-secondary-600": i === current()}}
                                                width={"0.5rem"}></FullCircleIcon></button>
                        )}</Index>
                        <button onClick={() => addOffset(1)}><ArrowRightIcon width={"1.5rem"}></ArrowRightIcon></button>
                    </div>
                </div>
            </Show>
        </section>
    )
}