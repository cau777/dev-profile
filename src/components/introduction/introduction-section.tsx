import { Component } from "solid-js";
import { Background } from "~/components/introduction/background";

export const IntroductionSection: Component = () => {
  return (
    <section class={"relative h-screen w-screen snap-center"}>
      <Background />
      <div class={"absolute h-screen w-screen grid-center"}>
        <div class={"flex gap-4"}>
          <div class={"h-24 w-10 bg-white"}></div>
          <div class={"font-bold text-2xl"}>
            <p>Hi! I'm Cauã Rinaldi</p>
            <p>Welcome to my website</p>
            <p>Full Stack developer at Aerial</p>
          </div>
        </div>
      </div>
    </section>
  );
};
