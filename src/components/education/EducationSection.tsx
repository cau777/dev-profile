import {Component, For} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {INSTITUTIONS} from "~/components/education/Institutions";
import {globalLang, t} from "~/i18n/i18n-config";
import {AnimatedSlide} from "~/components/animated/AnimatedSlide";

export const EducationSection: Component = () => {
    const fDate = (date: Date) => date.toLocaleString(globalLang(), {month: "short", year: "numeric"});
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"education"}></SectionTitle>
            <ul>
                <For each={INSTITUTIONS}>{(institution) => (
                    <AnimatedSlide>
                        <li class={"rounded-sm mb-4 border-l-2 pl-3 border-primary-500"}>
                            <h4>
                                {/*<span class={"text-gray-100"}>{t(institution.degree)}</span> - <span class={"text-gray-75"}>{institution.name}</span>*/}
                                <span class={"text-primary-200"}>{institution.name}</span>
                            </h4>
                            <h5 class={"text-gray-100"}>
                                {t(institution.degree)}
                            </h5>
                            <div
                                class={"text-sm text-gray-200"}>{fDate(institution.start)} - {institution.end ? fDate(institution.end) : t("presentTime")}</div>
                        </li>
                    </AnimatedSlide>
                )}
                </For>
            </ul>
        </section>
    )
}