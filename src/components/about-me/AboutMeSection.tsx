import {Component} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";

export const AboutMeSection: Component = () => {
    return (
        <section>
            <SectionTitle title={"About me"}></SectionTitle>
            <p class={"text-center text-sm text-gray-200"}>
                I program primarily as a hobby, but would like to start doing it
                professionally. I'm always learning new
                technologies and doing courses in my free time. Besides, I love challenging myself with different
                projects and concepts. My favorite areas are backend and frontend development. Throughout the years,
                I
                explored many technologies and created various projects, primarily open-source on GitHub.
            </p>
        </section>
    )
}