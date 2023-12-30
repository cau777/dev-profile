import { Component } from "solid-js";
import { PointStarIcon } from "~/icons/point-star";

const randomDelay = () => {
  return { style: { "animation-delay": `${Math.random() * 2}s` } };
};

export const Background: Component = () => {
  return (
    <div class="absolute h-screen w-screen bg-gradient-to-b from-atm-1 via-atm-2 to-atm-3">
      <PointStarIcon
        {...randomDelay()}
        width="2rem"
        class="absolute star-shine top-[8%] left-[5%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="4rem"
        class="absolute star-shine top-[80%] left-[18%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="3rem"
        class="absolute star-shine top-[62%] left-[88%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="2rem"
        class="absolute star-shine top-[75%] left-[16%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="3rem"
        class="absolute star-shine top-[86%] left-[66%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="2rem"
        class="absolute star-shine top-[33%] left-[80%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="2rem"
        class="absolute star-shine top-[20%] left-[20%]"
      />
      <PointStarIcon
        {...randomDelay()}
        width="3rem"
        class="absolute star-shine top-[27%] left-[10%]"
      />
    </div>
  );
};
