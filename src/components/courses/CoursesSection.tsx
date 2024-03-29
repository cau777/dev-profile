import {Component, For, Show} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {AnimatedSlide} from "~/components/animated/AnimatedSlide";
import {COURSES} from "~/components/courses/Courses";
import {A} from "solid-start";
import {useLang, useT} from "~/components/LanguagesContext";

export const CoursesSection: Component = () => {
    let t = useT();
    const fDate = (date: Date) => date.toLocaleString(useLang(), {month: "short", year: "numeric"});
    
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"courses"}></SectionTitle>
            <AnimatedSlide>
                <div class={"flex flex-wrap gap-4 justify-center"}>
                    <For each={COURSES}>{o => (
                        <div class={"rounded-lg bg-gray-800 border-2 p-3 border-gray-700 w-52"}>
                            <h5 class={"text-primary-300 mb-1"}>{o.name}</h5>
                            <h6 class={"text-sm text-gray-100 mb-2"}>{o.organization}</h6>
                            <div class={"text-xs text-gray-100"}>{fDate(o.date)}</div>
                            <div>
                                <Show when={o.url !== undefined} keyed={true}>
                                    <div class={"mt-3"}>
                                        <A class={"text-xs text-gray-200"} href={o.url!}
                                           target={"_blank"}>{t.viewCertificate}</A>
                                    </div>
                                </Show>
                            </div>
                        </div>
                    )}</For>
                </div>
            </AnimatedSlide>
        </section>
    )
}