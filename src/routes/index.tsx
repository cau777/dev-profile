import {BioSection} from "~/components/bio/BioSection";
import {AboutMeSection} from "~/components/about-me/AboutMeSection";
import {EducationSection} from "~/components/education/EducationSection";
import {NavControls} from "~/components/nav-controls/NavControls";

export default function Home() {
    return (
        <NavControls>
            <main class="mx-auto py-5 container">
                <BioSection></BioSection>
                <AboutMeSection></AboutMeSection>
                <EducationSection></EducationSection>
            </main>
        </NavControls>
    );
}
