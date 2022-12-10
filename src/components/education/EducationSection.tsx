import {Component, For} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {INSTITUTIONS} from "~/components/education/Institutions";
import {t} from "~/i18n/i18n-config";
import {AnimatedSection} from "~/components/animated/AnimatedSection";

function formatDate(date: Date) {
    // TODO: locale
    return date.toLocaleString("en", {month: "short", year: "numeric"});
}

export const EducationSection: Component = () => {
    return (
        <>
            <SectionTitle title={"education"}></SectionTitle>
            <AnimatedSection>
                <ul>
                    <For each={INSTITUTIONS}>{(institution) => (
                        <li class={"rounded-sm mb-4 border-l-2 pl-3 border-primary-500"}>
                            <h4>
                                {/*<span class={"text-gray-100"}>{t(institution.degree)}</span> - <span class={"text-gray-75"}>{institution.name}</span>*/}
                                <span class={"text-primary-200"}>{institution.name}</span>
                            </h4>
                            <h5 class={"text-gray-100"}>
                                {t(institution.degree)}
                            </h5>
                            <div
                                class={"text-sm text-gray-200"}>{formatDate(institution.start)} - {institution.end ? formatDate(institution.end) : t("presentTime")}</div>
                        </li>
                    )}
                    </For>
                </ul>
            </AnimatedSection>
        </>
    )
}