import {BioSection} from "~/components/bio/BioSection";
import {AboutMeSection} from "~/components/about-me/AboutMeSection";
import {EducationSection} from "~/components/education/EducationSection";

export default function Home() {
    return (
        <main class="mx-auto py-5 container lg:px-32">
            <BioSection></BioSection>
            <AboutMeSection></AboutMeSection>
            <EducationSection></EducationSection>
        </main>
    );
}
