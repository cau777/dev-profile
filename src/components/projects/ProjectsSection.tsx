import {batch, Component, createSignal, For, Index} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {ProjectDisplay} from "~/components/projects/ProjectDisplay";
import {useObserver} from "~/utils/intersection";
import {ArrowLeftIcon} from "~/components/icons/ArrowLeftIcon";
import {ArrowRightIcon} from "~/components/icons/ArrowRightIcon";
import {FullCircleIcon} from "~/components/icons/FullCircleIcon";
import {useT} from "~/components/LanguagesContext";
import {PROJECTS} from "~/components/projects/Projects";

export const ProjectsSection: Component = () => {
    let {ref, visible} = useObserver(0.3);
    let [prev, setPrev] = createSignal<number>();
    let [current, setCurrent] = createSignal(0);
    let t = useT();
    
    function addOffset(val: number) {
        setCurrentAndPrev((current() + PROJECTS.length + val) % PROJECTS.length);
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
                <div ref={ref} classList={{visible: visible()}} class={"animate-fade"}>
                    <div class={"carousel-items"}>
                        <For each={PROJECTS}>{(o, i) => (
                            <div classList={{current: i() === current(), prev: i() === prev()}}>
                                <ProjectDisplay {...o}></ProjectDisplay>
                            </div>
                        )}</For>
                    </div>
                    
                    <div class={"flex justify-center gap-2 mt-5"}>
                        <button onClick={() => addOffset(-1)} title={t.prev}>
                            <ArrowLeftIcon width={"1.8rem"}></ArrowLeftIcon>
                        </button>
                        
                        <Index each={PROJECTS}>{(_, i) => (
                            <button onClick={() => setCurrentAndPrev(i)} aria-label={"Project " + i}>
                                <FullCircleIcon classList={{"text-secondary-600": i === current()}}
                                                width={"0.8rem"}></FullCircleIcon></button>
                        )}</Index>
                        
                        <button onClick={() => addOffset(1)} title={t.next}>
                            <ArrowRightIcon width={"1.8rem"} ></ArrowRightIcon>
                        </button>
                    </div>
                </div>
        </section>
    )
}