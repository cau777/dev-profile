import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  ParentComponent,
} from "solid-js";
import { ShuttleIcon } from "~/icons/shuttle";
import { LifePoint } from "~/components/carreer/life-point";
import { Link } from "~/components/util/link";
import { ExponentialPath, fn } from "~/components/util/exponential-path";
import { RocketSectionProps } from "~/components/rocket-super-section/rocket-super-section";

const graphXStart = -2;
const graphXEnd = 28;
const graphWidth = graphXEnd - graphXStart;

const graphYStart = fn.apply(graphXStart);
const graphYEnd = 15 + fn.apply(graphXStart);
const graphHeight = graphYEnd - graphYStart;

const animationDelay = 800;
const animationDuration = 10_000;

export const CareerSection: ParentComponent<RocketSectionProps> = (props) => {
  const [rocketX, setRocketX] = createSignal(0);
  const [rocketY, setRocketY] = createSignal(0);
  const [rocketAngle, setRocketAngle] = createSignal(0);

  createEffect(() => {
    if (!props.visible) return;
    const animationInterval = 10;

    // TODO: compile CSS keyframes
    let time = -animationDelay;
    const handler = setInterval(() => {
      const t = Math.max(0, time / animationDuration);
      const x = t * graphWidth;

      setRocketX((x / graphWidth) * 100);
      setRocketY(
        ((fn.apply(x + graphXStart) - graphYStart) / graphHeight) * 100,
      );
      setRocketAngle(fn.angleAt(x));
      props.setLineLength(fn.integral(-2, x + graphXStart) * 10);

      time += animationInterval;
      if (time >= animationDuration) clearInterval(handler);
    }, animationInterval);

    onCleanup(() => {
      clearInterval(handler);
    });
  });

  return (
    <section
      class={
        "relative w-screen h-screen bg-red-200 p-0 bg-gradient-to-b from-atm-3 to-atm-4 overflow-hidden snap-center"
      }
    >
      <div class={"absolute top-0 left-0 m-12"}>
        <h1 class={"font-bold text-4xl"}>My Timeline</h1>
      </div>
      <div class={"relative aspect-[2/1] max-h-full mx-auto"}>
        {props.children}
        <div
          class={"absolute -translate-x-1/2 translate-y-1/2 z-20"}
          style={{ bottom: `${rocketY()}%`, left: `${rocketX()}%` }}
        >
          <ShuttleIcon
            width={"6rem"}
            style={{ rotate: `${-rocketAngle()}rad` }}
            class="translate-x-4"
          />
        </div>
      </div>
    </section>
  );
};
