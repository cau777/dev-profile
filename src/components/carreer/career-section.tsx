import {Component, createEffect, createSignal, onCleanup} from "solid-js";
import {ShuttleIcon} from "~/icons/shuttle";

const trajectoryFn = (t: number) => Math.exp(1 / (2 * Math.PI) * t) - 1

const velocity = (t: number) => Math.exp(1 / (2 * Math.PI) * t) * (1 / (2 * Math.PI))

const angle = (t: number) => Math.atan(velocity(t))

export const CareerSection: Component = () => {
  const [visible, setVisible] = createSignal(false)
  const [rocketX, setRocketX] = createSignal(0)
  const [rocketY, setRocketY] = createSignal(0)
  const [rocketAngle, setRocketAngle] = createSignal(0)

  createEffect(() => {
    if (!visible()) return

    let time = 0
    const handler = setInterval(() => {
      const t = time / 10_000

      setRocketX(t * 100)
      setRocketY(trajectoryFn(t * 15) / trajectoryFn(15) * 100)
      setRocketAngle(angle(t * 15))

      time += 100
      if (time >= 10_000) clearInterval(handler)
    }, 100)

    onCleanup(() => clearInterval(handler))
  })

  return (
    <>
      <div class={'bg-black'}>
        <button onClick={() => setVisible(true)}>Visible</button>
        <button onClick={() => setVisible(false)}>Not visible</button>
      </div>

      <section class={'relative w-screen h-screen bg-red-200 grid-center py-36 px-36'}>
        <div class={'relative w-full h-full'}>
          <div class={'absolute top-0 left-0 w-full max-h-full aspect-[150/100] mx-auto'}>
            <div class={'absolute -translate-x-1/2 translate-y-1/2'}
                 style={{bottom: `${rocketY()}%`, left: `${rocketX()}%`}}>
              <ShuttleIcon width={'4rem'} style={{rotate: `${-rocketAngle()}rad`}}/>
            </div>
            <svg width={'100%'} height={'100%'} viewBox={'0 0 150 100'}>
              <path d="M 0 100 C 70 87, 110 68, 150 1" stroke="white" fill="transparent"/>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}