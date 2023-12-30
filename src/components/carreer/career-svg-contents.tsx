import { Component } from "solid-js";
import { LifePoint } from "~/components/carreer/life-point";
import { Link } from "~/components/util/link";
import { RocketSvgContentProps } from "~/components/rocket-super-section/rocket-super-section";
import { ExponentialPath } from "~/components/util/exponential-path";

export const CareerSvgContents: Component<RocketSvgContentProps> = (props) => {
  return (
    <>
      <ExponentialPath stroke-dasharray={1} stroke-width="0.8" opacity={0.3} />
      <LifePoint
        visible={props.visible && props.lineLength > 12}
        title="First line of code"
        time={"Start of 2018"}
        direction={"up"}
        x={18}
        y={147}
        length={80}
      >
        I wanted to create a high-tech Minecraft mod, but that was way too
        difficult with no coding experience (but that didn't stop me)
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 28}
        title="Started learning Python"
        time={"Middle of 2018"}
        direction={"up"}
        x={31}
        y={145}
        length={40}
      >
        I decided to start learning Python (because it's more beginner friendly)
        with some free tutorials online
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 73}
        title="Simple programs for Hobby"
        time={"2018-2020"}
        direction={"right"}
        x={70}
        y={135}
        length={40}
      >
        I switched to C# because of WinForms for easy GUI and made over 30
        programs (yes, I still have the folder) mainly for solving the math
        concepts I learned at school
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 130}
        title="JetBrains Academy"
        time={"2020-2022"}
        direction={"right"}
        x={118}
        y={110}
        length={40}
      >
        With{" "}
        <Link href="https://education.github.com/pack" target={"_blank"}>
          GitHub Education
        </Link>
        , I got access to{" "}
        <Link href="https://www.jetbrains.com/pt-br/academy/" target={"_blank"}>
          JetBrains Academy
        </Link>{" "}
        (a project-based learning platform), where I studied Python and Java by
        making over 20 open-source project on{" "}
        <Link href={"https://github.com/cau777"} target={"_blank"}>
          My GitHub
        </Link>
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 176}
        title="Built an AI from scratch"
        time={"2022-2023"}
        direction={"right"}
        x={150}
        y={78}
        length={40}
      >
        My proudest open-source project so far: A GPU-accelerated deep learning
        library built in Rust almost from scratch. Plus an online playground to
        use it to recognize digits (MNIST dataset).
        <Link
          href={"https://github.com/cau777/ai_playground"}
          target={"_blank"}
        >
          Check it here!
        </Link>
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 200}
        title="Intern at Aerial"
        time={"April 2023"}
        direction={"right"}
        x={165}
        y={56}
        length={25}
      >
        Despite my lack of professional experience,{" "}
        <Link href="https://www.linkedin.com/in/tianhuili/" target={"_blank"}>
          Michael Li
        </Link>{" "}
        gave me an opportunity to work at{" "}
        <Link href={"https://aerialops.io/"} target={"_blank"}>
          Aerial
        </Link>{" "}
        as an intern for a couple of months
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 230}
        title="Full-Stack Developer"
        time={"September 2023"}
        direction={"left"}
        x={180}
        y={30}
        length={120}
      >
        After the internship period was over, I joined Aerial as a Full-Stack
        Developer
      </LifePoint>
      <LifePoint
        visible={props.visible && props.lineLength > 235}
        title="Full-Stack Developer"
        time={"October 2023"}
        direction={"right"}
        x={182}
        y={25}
        length={10}
      >
        I got promoted and got more responsibilities, like ML in Python and code
        reviews
      </LifePoint>
    </>
  );
};
