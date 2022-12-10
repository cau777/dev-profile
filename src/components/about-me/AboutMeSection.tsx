import {Component} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {t} from "~/i18n/i18n-config";

export const AboutMeSection: Component = () => {
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"aboutMe"}></SectionTitle>
            <div class={"grid-center"}>
                <p class={"text-center text-gray-100 max-w-3xl"}>
                    {t("aboutMe_1")}
                    <br/>
                    {t("aboutMe_2")}
                    <br/>
                    {t("aboutMe_3")}
                    <br/>
                    {t("aboutMe_4")}
                </p>
            </div>
        </section>
    )
}