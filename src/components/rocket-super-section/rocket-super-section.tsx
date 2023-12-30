import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  Setter,
} from "solid-js";
import { CareerSvgContents } from "~/components/carreer/career-svg-contents";
import { ExponentialPath } from "~/components/util/exponential-path";
import { CareerSection } from "~/components/carreer/career-section";
import { Graph, MathSection } from "~/components/math/math-section";
import React from "react";

type Props = {
  scroll: number;
};

export type RocketSvgContentProps = {
  visible: boolean;
  lineLength: number;
};

export type RocketSectionProps = {
  visible: boolean;
  setLineLength: Setter<number>;
};

export const RocketSuperSection: Component<Props> = (props) => {
  const [careerVisible, setCareerVisible] = createSignal(false);
  const [mathVisible, setMathVisible] = createSignal(false);
  const [lineLength, setLineLength] = createSignal(0);
  const [linePosition, setLinePosition] = createSignal<Partial<DOMRect>>();

  const careerObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      setCareerVisible(true);
      setMathVisible(false);
    },
    { root: null, threshold: 0.9 },
  );
  const mathObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      setMathVisible(true);
    },
    { root: null, threshold: 0.9 },
  );

  const careerSvg = (
    <svg
      class={"absolute top-0"}
      width={"100%"}
      height={"100%"}
      viewBox={`0 0 300 150`}
    >
      <CareerSvgContents visible={careerVisible()} lineLength={lineLength()} />
    </svg>
  );
  const careerSection = (
    <section>
      <CareerSection visible={careerVisible()} setLineLength={setLineLength}>
        {careerSvg}
      </CareerSection>
    </section>
  );

  const mathSvg = (
    <svg width={"100%"} height={"100%"} viewBox={`0 0 300 150`}>
      <Graph />
    </svg>
  );
  const mathSection = (
    <section>
      <MathSection visible={mathVisible()} setLineLength={setLineLength}>
        {mathSvg}
      </MathSection>
    </section>
  );

  const parent = (
    <div>
      <div
        class={"fixed z-10 pointer-events-none"}
        style={{
          top: linePosition()?.top + "px",
          left: linePosition()?.left + "px",
          height: linePosition()?.height + "px",
          width: linePosition()?.width + "px",
        }}
      >
        <svg width={"100%"} height={"100%"} viewBox={`0 0 300 150`}>
          <ExponentialPath
            stroke-dasharray={1000}
            stroke-dashoffset={-1000 - lineLength()}
          />
        </svg>
      </div>
      {careerSection}
      {mathSection}
    </div>
  );

  createEffect(() => {
    const interpolate = (a: number, b: number, t: number) => a + (b - a) * t;
    const careerRect = (careerSvg as HTMLElement).getBoundingClientRect();
    const mathRect = (mathSvg as HTMLElement).getBoundingClientRect();
    const relativeScroll = props.scroll - (parent as HTMLElement).offsetTop;
    const t = Math.max(
      0,
      Math.min(1, relativeScroll / (careerSection as HTMLElement).clientHeight),
    );
    window.requestAnimationFrame(() =>
      setLinePosition({
        left: interpolate(careerRect.left, mathRect.left, t),
        top: interpolate(careerRect.top, mathRect.top, t),
        height: interpolate(careerRect.height, mathRect.height, t),
        width: interpolate(careerRect.width, mathRect.width, t),
      }),
    );
  });

  careerObserver.observe(careerSection as HTMLElement);
  mathObserver.observe(mathSection as HTMLElement);

  return parent;
};
