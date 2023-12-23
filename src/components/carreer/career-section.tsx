import {Component, createEffect, createSignal, onCleanup} from "solid-js";
import {ShuttleIcon} from "~/icons/shuttle";


class ExponentialFunction {

  public constructor(private readonly factor: number) {
  }

  public apply(x: number) {
    return Math.exp(this.factor * x)
  }

  public reverse(y: number) {
    return Math.log(y / this.factor)
  }

  public derivative(x: number) {
    return Math.exp(this.factor * x) * this.factor
  }

  public angleAt(x: number) {
    return Math.atan(this.derivative(x))
  }

  public integral(a:number, b: number) {
    const l1 = Math.log(Math.sqrt(1 + this.factor * Math.exp(this.factor * b)) + 1)
    const l2 = -Math.log(Math.sqrt(1 + this.factor * Math.exp(this.factor * b)) - 1)
    const l3 = -Math.log(Math.sqrt(1 + this.factor * Math.exp(this.factor * a)) + 1)
    const l4 = Math.log(Math.sqrt(1 + this.factor * Math.exp(this.factor * a)) - 1)
    const l5 = -2 * Math.sqrt(1 + this.factor * Math.exp(this.factor * b))
    const l6 = 2 * Math.sqrt(1 + this.factor * Math.exp(this.factor * a))
    return -(l1 + l2 + l3 + l4 + l5 + l6) / this.factor
  }
}

const fn = new ExponentialFunction(1 / (2 * Math.PI))


const svgWidth = 300
const svgHeight = 150

const graphXStart = -2
const graphXEnd = 28
const graphWidth = graphXEnd - graphXStart

const graphYStart = fn.apply(graphXStart)
const graphYEnd = 15 + fn.apply(graphXStart)
const graphHeight = graphYEnd - graphYStart

const animationDuration = 10_000

export const CareerSection: Component = () => {
  const [visible, setVisible] = createSignal(false)
  const [rocketX, setRocketX] = createSignal(0)
  const [rocketY, setRocketY] = createSignal(0)
  const [lineLength, setLineLength] = createSignal(0)
  const [rocketAngle, setRocketAngle] = createSignal(0)

  createEffect(() => {
    if (!visible()) return
    const animationInterval = 10

    let time = 0
    const handler = setInterval(() => {
      const t = time / animationDuration
      const x = t * graphWidth

      setRocketX(x / graphWidth * 100)
      setRocketY((fn.apply(x + graphXStart) - graphYStart) / graphHeight * 100)
      setRocketAngle(fn.angleAt(x))
      setLineLength(fn.integral(-2, x + graphXStart) * 10)

      time += animationInterval
      if (time >= animationDuration) clearInterval(handler)
    }, animationInterval)

    onCleanup(() => clearInterval(handler))
  })

  return (
    <>
      <div class={'bg-black'}>
        <button onClick={() => setVisible(true)}>Visible</button>
        <button onClick={() => setVisible(false)}>Not visible</button>
      </div>

      <section class={'relative w-screen h-screen bg-red-200 p-0 bg-gradient-to-b from-atm-3 to-atm-4 overflow-hidden'}>
        <div class={'relative aspect-[2/1] max-h-full mx-auto'}>
          <svg class={'absolute top-0'} width={'100%'} height={'100%'} viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          >
            <path d={`M 0 ${svgHeight - 1} C 132 ${svgHeight - 12}, 162 ${svgHeight - 83}, 193 0`} stroke="white"
                  fill="transparent" stroke-dasharray={1000} stroke-dashoffset={-1000-lineLength()} />
            <circle cx={10} cy={svgHeight - 2} r={2}/>
            <circle cx={50} cy={svgHeight - 9} r={2}/>
          </svg>
          <div class={'absolute -translate-x-1/2 translate-y-1/2'}
               style={{bottom: `${rocketY()}%`, left: `${rocketX()}%`}}>
            <ShuttleIcon width={'6rem'} style={{rotate: `${-rocketAngle()}rad`}}/>
          </div>
        </div>
      </section>
    </>
  )
}