import {Component, For} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {INSTITUTIONS} from "~/components/education/Institutions";
import {AnimatedSlide} from "~/components/animated/AnimatedSlide";
import {useLang, useT} from "~/components/LanguagesContext";

export const EducationSection: Component = () => {
    let t = useT();
    const fDate = (date: Date) => date.toLocaleString(useLang(), {month: "short", year: "numeric"});
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"education"}></SectionTitle>
            <ul>
                <For each={INSTITUTIONS}>{(institution) => (
                    <li>
                        <AnimatedSlide>
                            <div class={"rounded-sm mb-4 border-l-2 pl-3 border-primary-500"}>
                                <h4>
                                    {/*<span class={"text-gray-100"}>{t(institution.degree)}</span> - <span class={"text-gray-75"}>{institution.name}</span>*/}
                                    <span class={"text-primary-200"}>{institution.name}</span>
                                </h4>
                                <h5 class={"text-gray-100"}>
                                    {/* @ts-ignore */}
                                    {t[institution.degree]}
                                </h5>
                                <div
                                    class={"text-sm text-gray-200"}>{fDate(institution.start)} - {institution.end ? fDate(institution.end) : t.presentTime}</div>
                            </div>
                        </AnimatedSlide>
                    </li>
                )}
                </For>
            </ul>
        </section>
    )
}