import {Component, createEffect, createSignal, onCleanup} from "solid-js";
import {ShuttleIcon} from "~/icons/shuttle";

const trajectoryFn = (t: number) => Math.exp(1 / (2 * Math.PI) * t)

const velocity = (t: number) => Math.exp(1 / (2 * Math.PI) * t) * (1 / (2 * Math.PI))

const angle = (t: number) => Math.atan(velocity(t))


const svgWidth = 300
const svgHeight = 150

const graphXStart = -2
const graphXEnd = 28
const graphWidth = graphXEnd - graphXStart

const graphYStart = trajectoryFn(graphXStart)
const graphYEnd = 15+  trajectoryFn(graphXStart)
const graphHeight = graphYEnd - graphYStart

const animationDuration = 10_000

export const CareerSection: Component = () => {
  const [visible, setVisible] = createSignal(false)
  const [rocketX, setRocketX] = createSignal(0)
  const [rocketY, setRocketY] = createSignal(0)
  const [rocketAngle, setRocketAngle] = createSignal(0)

  createEffect(() => {
    if (!visible()) return
    const animationInterval = 10

    let time = 0
    const handler = setInterval(() => {
      const t = time / animationDuration
      const x = t * graphWidth

      setRocketX(x / graphWidth * 100)
      setRocketY((trajectoryFn(x + graphXStart) - graphYStart) / graphHeight * 100)
      setRocketAngle(angle(x))

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
          <svg class={'absolute top-0'} width={'100%'} height={'100%'} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
            <path d={`M 0 ${svgHeight-1} C 130 ${svgHeight - 12}, 162 ${svgHeight - 80}, 193 0`} stroke="white" fill="transparent"/>
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