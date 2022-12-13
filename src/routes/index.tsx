import {BioSection} from "~/components/bio/BioSection";
import {AboutMeSection} from "~/components/about-me/AboutMeSection";
import {EducationSection} from "~/components/education/EducationSection";
import {NavControls} from "~/components/nav-controls/NavControls";
import {CoursesSection} from "~/components/courses/CoursesSection";
import {ProjectsSection} from "~/components/projects/ProjectsSection";
import {LanguagesSection} from "~/components/languages/LanguagesSection";
import {Suspense, SuspenseList} from "solid-js";

export default function Home() {
    return (
        <NavControls>
            <main class="mx-auto py-5 container">
                <BioSection></BioSection>
                <AboutMeSection></AboutMeSection>
                <EducationSection></EducationSection>
                <CoursesSection></CoursesSection>
                <SuspenseList revealOrder={"forwards"}>
                    <Suspense>
                        <ProjectsSection></ProjectsSection>
                    </Suspense>
                    <Suspense>
                        <LanguagesSection></LanguagesSection>
                    </Suspense>
                </SuspenseList>
            </main>
        </NavControls>
    );
}
