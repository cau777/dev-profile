import {Component, Suspense} from "solid-js";
import {NavControls} from "~/components/nav-controls/NavControls";
import {BioSection} from "~/components/bio/BioSection";
import {AboutMeSection} from "~/components/about-me/AboutMeSection";
import {EducationSection} from "~/components/education/EducationSection";
import {CoursesSection} from "~/components/courses/CoursesSection";
import {ProjectsSection} from "~/components/projects/ProjectsSection";
import {LanguagesSection} from "~/components/languages/LanguagesSection";
import {LanguagesProvider} from "~/components/LanguagesContext";

type Props = {
    lang: string;
}

export const Main: Component<Props> = (props) => (
    <LanguagesProvider lang={props.lang}>
        <NavControls>
            <main class="mx-auto py-5 container">
                <BioSection></BioSection>
                <AboutMeSection></AboutMeSection>
                <EducationSection></EducationSection>
                <CoursesSection></CoursesSection>
                <ProjectsSection></ProjectsSection>
                
                <Suspense>
                    <LanguagesSection></LanguagesSection>
                </Suspense>
            </main>
        </NavControls>
    </LanguagesProvider>
)