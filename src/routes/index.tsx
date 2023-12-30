import {IntroductionSection} from "~/components/introduction/introduction-section";
import {CareerSection} from "~/components/carreer/career-section";
import {MathSection} from "~/components/math/math-section";
import {RocketSuperSection} from "~/components/rocket-super-section/rocket-super-section";
import {createSignal} from "solid-js";

export default function Home() {
  const [scroll, setScroll] = createSignal(0)

  return (
    <main class={'snap-y snap-proximity max-h-screen overflow-y-scroll overflow-x-hidden'} onScroll={e => {
      setScroll(e.target.scrollTop);
    }}>
      <IntroductionSection/>
      <RocketSuperSection scroll={scroll()}/>
    </main>
  );
}
