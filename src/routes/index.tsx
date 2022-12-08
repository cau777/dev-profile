import {BioSection} from "~/components/bio/BioSection";
import {AboutMeSection} from "~/components/about-me/AboutMeSection";

export default function Home() {
    return (
        <main class="mx-auto py-5 container lg:px-32">
            <BioSection></BioSection>
            <AboutMeSection></AboutMeSection>
        </main>
    );
}
