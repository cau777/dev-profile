import {IntroductionSection} from "~/components/introduction/introduction-section";
import {CareerSection} from "~/components/carreer/career-section";

export default function Home() {
  return (
    <main class={'snap-y snap-proximity max-h-screen overflow-y-scroll overflow-x-hidden'}>
      <IntroductionSection/>
      <CareerSection/>
    </main>
  );
}
