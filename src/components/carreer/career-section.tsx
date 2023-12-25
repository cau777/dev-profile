import {Component, createEffect, createSignal, onCleanup} from "solid-js";
import {ShuttleIcon} from "~/icons/shuttle";
import {SnapSectionVisible} from "~/components/util/SnapSectionVisible";
import {LifePoint} from "~/components/carreer/LifePoint";


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

  public integral(a: number, b: number) {
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

const graphXStart = -2
const graphXEnd = 28
const graphWidth = graphXEnd - graphXStart

const graphYStart = fn.apply(graphXStart)
const graphYEnd = 15 + fn.apply(graphXStart)
const graphHeight = graphYEnd - graphYStart

const animationDuration = 30_000

export const CareerSection: Component = () => {
  const [visible, setVisible] = createSignal(false)
  const [rocketX, setRocketX] = createSignal(0)
  const [rocketY, setRocketY] = createSignal(0)
  const [lineLength, setLineLength] = createSignal(0)
  const [rocketAngle, setRocketAngle] = createSignal(0)

  const observer = new IntersectionObserver((entries) => {
    setVisible(entries[0].isIntersecting)
  }, {root: null, threshold: 0.9})

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

    onCleanup(() => {
      setRocketX(0)
      setRocketY(0)
      setLineLength(0)
      setRocketAngle(0)
      clearInterval(handler);
    })
  })

  const animationFrame = (
    <div class={'relative aspect-[2/1] max-h-full mx-auto'}>
      <svg class={'absolute top-0'} width={'100%'} height={'100%'} viewBox={`0 0 300 150`}
      >
        {/* TODO: optimize path */}
        <path d={`M 0 149 C 132 138, 162 67, 193 0`} stroke="white"
              fill="transparent" stroke-dasharray={1000} stroke-dashoffset={-1000 - lineLength()}/>
        <LifePoint visible={lineLength() > 12} title='First line of code' time={'Start of 2018'} direction={'up'} x={18} y={147}
                   height={80} description={"I wanted to create a high-tech Minecraft mod, but that was way too difficult with no coding experience (but that didn't stop me)"}/>
        <LifePoint visible={lineLength() > 28} title='Started learning Python' time={'Middle of 2018'} direction={'up'} x={31} y={145}
                   height={40} description={"I decided to start learning Python (because it's more beginner friendly) with some free tutorials online"}/>
      </svg>
      <div class={'absolute -translate-x-1/2 translate-y-1/2'}
           style={{bottom: `${rocketY()}%`, left: `${rocketX()}%`}}>
        <ShuttleIcon width={'6rem'} style={{rotate: `${-rocketAngle()}rad`}} class='translate-x-4'/>
      </div>
    </div>
  ) as HTMLDivElement

  observer.observe(animationFrame)

  return (
    <section
      class={'relative w-screen h-screen bg-red-200 p-0 bg-gradient-to-b from-atm-3 to-atm-4 overflow-hidden snap-center'}>
      <div class={'absolute top-0 left-0 m-12'}>
        <h1 class={'font-bold text-4xl'}>My Timeline</h1>
        <h5 class={'text-lg mb-2'}>Hover for more info</h5>
      </div>
      {animationFrame}
    </section>
  )
}