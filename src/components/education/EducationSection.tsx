import {Component, For} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {INSTITUTIONS} from "~/components/education/Institutions";
import {t} from "~/i18n/i18n-config";

function formatDate(date: Date) {
    // TODO: locale
    return date.toLocaleString("en", {month: "short", year: "numeric"});
}

export const EducationSection: Component = () => {
    return (
        <section>
            <SectionTitle title={"Education"}></SectionTitle>
            <ul>
                <For each={INSTITUTIONS}>{(institution) => (
                    <li class={"list-disc"}>
                        <h4>
                            <span>{t(institution.degree)}</span> - {institution.name}
                        </h4>
                        <div>{formatDate(institution.start)} - {institution.end ? formatDate(institution.end) : t("presentTime")}</div>
                    </li>
                )}
                </For>
            </ul>
        </section>
    )
}