import {Component, JSX, Match, Switch} from "solid-js";

const AnimatedLine: Component<JSX.LineSVGAttributes<SVGLineElement> & {
  visible: boolean;
  x1: number,
  x2: number,
  y1: number,
  y2: number
}> = (props) => {
  const length = () => Math.sqrt(Math.pow(props.x1 - props.x2, 2) + Math.pow(props.y1 - props.y2, 2))

  return (
    <line {...props} stroke-dasharray={length()} stroke-dashoffset={props.visible ? 0 : length()}/>
  )
}

type Props = {
  title: string
  time: string
  description: string
  x: number
  y: number
  visible: boolean
} & ({
  direction: 'up'
  height: number
})

export const LifePoint: Component<Props> = (props) => {
  return (
    <g class='cursor-default' classList={{'hidden': !props.visible}}>
      <Switch>
        <Match when={props.direction === 'up'}>
          <AnimatedLine x1={props.x} y1={props.y} x2={props.x} y2={props.y - props.height} stroke={'white'}
                        stroke-width={1}
                        class={'transition-all delay-500 duration-200'} visible={props.visible}/>
          <circle r={0.5} fill={props.visible ? 'white' : 'transparent'} cx={props.x} cy={props.y - props.height}
                  class={'transition-all delay-700 duration-200'}/>
          <AnimatedLine x1={props.x} y1={props.y - props.height} x2={props.x + 5} y2={props.y - props.height - 5}
                        stroke={'white'} stroke-width={1}
                        class={'transition-all delay-700 duration-200'} visible={props.visible}/>


          <text x={props.x + 5} y={props.y - props.height - 2.5} font-size={10}
                class={'font-bold transition-all delay-[900ms] duration-300'}
                fill={'white'} opacity={props.visible ? 100 : 0}>{'{'}</text>
          <circle r={0.5} fill={'white'} opacity={props.visible ? 100 : 0} cx={props.x + 5}
                  cy={props.y - props.height - 5}
                  class={'transition-all delay-[900ms] duration-300'}/>
          <text x={props.x + 10} y={props.y - props.height - 6} font-size={4}
                class={'font-bold transition-all delay-[900ms] duration-300'}
                fill={'white'} opacity={props.visible ? 100 : 0}>{props.title}</text>
          <text x={props.x + 10} y={props.y - props.height - 2} font-size={3}
                class={'font-semibold transition-all delay-[900ms] duration-300'}
                fill={'white'} opacity={props.visible ? 100 : 0}>{props.time}</text>

          <foreignObject x={props.x + 10} y={props.y - props.height} width="40" height="160">
            <div class={'text-[3px]'}>{props.description}</div>
          </foreignObject>
        </Match>
      </Switch>

      <circle cx={props.x} cy={props.y} r={2} fill={'transparent'} stroke-dasharray={2 * Math.PI * 2}
              stroke-dashoffset={props.visible ? 0 : 2 * Math.PI * 2} stroke-width={1} stroke={'white'}
              class={'transition-all duration-500'}/>
    </g>
  )
}