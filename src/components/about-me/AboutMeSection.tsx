import {Component} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";
import {AnimatedSlide} from "~/components/animated/AnimatedSlide";
import {useT} from "~/components/LanguagesContext";

export const AboutMeSection: Component = () => {
    let t = useT();
    return (
        <section class={"mb-32"}>
            <SectionTitle title={"aboutMe"}></SectionTitle>
            <AnimatedSlide>
                <div class={"grid-center"}>
                    <div class={"text-center text-gray-100 max-w-3xl"}>
                        {t.aboutMeText()}
                    </div>
                </div>
            </AnimatedSlide>
        </section>
    )
}