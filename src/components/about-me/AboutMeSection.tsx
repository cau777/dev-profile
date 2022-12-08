import {Component} from "solid-js";
import {SectionTitle} from "~/components/SectionTitle";

export const AboutMeSection: Component = () => {
    return (
        <section>
            <SectionTitle title={"About me"}></SectionTitle>
            <p class={"text-center text-sm text-gray-200"}>
                I'm almost 18 and if there's <b>one</b> thing I know is that I love finding creative solutions for problems.
                <br/>
                Also, I enjoy designing small and big applications, while working in the frontend and/or backend (see technologies).
                <br/>
                I'm from Brazil and Portuguese is my native language, but I'm also fluent in English (C1).
                <br/>
                I started programming in 2017 as a hobby, but began taking it seriously in the start of 2021.
                <br/>
                In this time I took various courses and made a lot of open-source projects in my GitHub account, exploring
                different technologies.
                <br/>
                I'll be studying Software Engineering in Unijuí from 2023 to 2028.
            </p>
        </section>
    )
}