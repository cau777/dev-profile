import { Component, JSX, Match, ParentComponent, Switch } from "solid-js"

const AnimatedLine: Component<
  JSX.LineSVGAttributes<SVGLineElement> & {
    visible: boolean
    x1: number
    x2: number
    y1: number
    y2: number
  }
> = (props) => {
  const length = () =>
    Math.sqrt(
      Math.pow(props.x1 - props.x2, 2) + Math.pow(props.y1 - props.y2, 2),
    )

  return (
    <line
      {...props}
      stroke-dasharray={length()}
      stroke-dashoffset={props.visible ? 0 : length()}
    />
  )
}

type Props = {
  title: string
  time: string
  x: number
  y: number
  visible: boolean
  length: number
  direction: "up" | "right" | "left"
}

export const LifePoint: ParentComponent<Props> = (props) => {
  const jointX = () => {
    switch (props.direction) {
      case "up":
        return props.x
      case "right":
        return props.x + props.length
      case "left":
        return props.x - props.length
    }
  }
  const jointY = () =>
    props.direction === "up" ? props.y - props.length : props.y
  const armEndX = () => (props.direction === "left" ? jointX() : jointX() + 5)
  const armEndY = () =>
    props.direction === "left" ? jointY() + 7 : jointY() - 5

  return (
    <g class="cursor-default" classList={{ hidden: !props.visible }}>
      <AnimatedLine
        x1={props.x}
        y1={props.y}
        x2={jointX()}
        y2={jointY()}
        stroke={"white"}
        stroke-width={1}
        class={"transition-all delay-500 duration-200"}
        visible={props.visible}
      />
      <circle
        r={0.5}
        fill={props.visible ? "white" : "transparent"}
        cx={jointX()}
        cy={jointY()}
        class={"transition-all delay-700 duration-200"}
      />
      <AnimatedLine
        x1={jointX()}
        y1={jointY()}
        x2={armEndX()}
        y2={armEndY()}
        stroke={"white"}
        stroke-width={1}
        class={"transition-all delay-700 duration-200"}
        visible={props.visible}
      />

      <text
        x={armEndX()}
        y={armEndY() + 2.5}
        font-size={10}
        class={"font-bold transition-all delay-[900ms] duration-300"}
        fill={"white"}
        opacity={props.visible ? 100 : 0}
      >
        {"{"}
      </text>
      <circle
        r={0.5}
        fill={"white"}
        opacity={props.visible ? 100 : 0}
        cx={armEndX()}
        cy={armEndY()}
        class={"transition-all delay-[900ms] duration-300"}
      />

      <text
        x={armEndX() + 5}
        y={armEndY() - 1}
        font-size={4}
        class={"font-bold transition-all delay-[900ms] duration-300"}
        fill={"white"}
        opacity={props.visible ? 100 : 0}
      >
        {props.title}
      </text>
      <text
        x={armEndX() + 5}
        y={armEndY() + 3}
        font-size={3}
        class={"font-semibold transition-all delay-[900ms] duration-300"}
        fill={"white"}
        opacity={props.visible ? 100 : 0}
      >
        {props.time}
      </text>

      <foreignObject
        x={armEndX() + 5}
        y={armEndY() + 5}
        width={props.direction === "up" ? 40 : 90}
        height="160"
      >
        <p
          class={"text-[3px] transition-all delay-[900ms] duration-300"}
          style={{ opacity: props.visible ? 100 : 0 }}
        >
          {props.children}
        </p>
      </foreignObject>

      <circle
        cx={props.x}
        cy={props.y}
        r={2}
        fill={"transparent"}
        stroke-dasharray={2 * Math.PI * 2}
        stroke-dashoffset={props.visible ? 0 : 2 * Math.PI * 2}
        stroke-width={1}
        stroke={"white"}
        class={"transition-all duration-500"}
      />
    </g>
  )
}
