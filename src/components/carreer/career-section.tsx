import {Component, createEffect, createSignal, onCleanup} from "solid-js";
import {ShuttleIcon} from "~/icons/shuttle";

const fn = (p0: number, p1: number, p2: number, p3: number, t: number) =>
  3 * Math.pow(1 - t, 2) * (p1 - p0) + 6 * t * (1 - t) * (p2 - p1) + 3 * t * t * (p3 - p2)

// const fn = (p0: number, p1: number, p2: number, p3: number, t: number) =>
//   6 * (1 - t) * (p2 - 2 * p1 + p0) + 6 * t * (p3 - 2 * p2 + p1)

const normalize = (x: number, y: number) => [x / Math.sqrt(x * x + y * y), y / Math.sqrt(x * x + y * y)]

const dot = (x1: number, y1: number, x2: number, y2: number) => x1*x2 + y1*y2

export const CareerSection: Component = () => {
  const [visible, setVisible] = createSignal(false)
  const [nx, setNx] = createSignal(0)
  const [ny, setNy] = createSignal(0)

  createEffect(() => {
    if (!visible()) return

    let time = 0
    const handler = setInterval(() => {
      const t = time / 10_000
      const [p0x, p0y] = [0, 0]
      const [p1x, p1y] = [1, 0.15]
      const [p2x, p2y] = [1, 1]
      const [p3x, p3y] = [1, 1]

      const dx = fn(p0x, p1x, p2x, p3x, t)
      const dy = fn(p0y, p1y, p2y, p3y, t)
      const [nx, ny] = normalize(dx, dy)
      setNx(nx)
      setNy(ny)

      console.log(t, nx, ny, Math.acos(dot(nx, ny, 1, 0)) / Math.PI * 180  )

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
        <div class={'relative w-64 h-64 bg-red-500'}>
          <div class={'absolute top-0 left-0 h-full w-full'}>
            <svg width={'100%'} height={'100%'} viewBox={'0 0 100 100'}>
              <path d="M 0 100 C 100 85, 100 0, 100 0" stroke="white" fill="transparent"/>
              <path d="M 100 100 C 0 85, 0 0, 0 0" stroke="white" fill="transparent"/>
              <circle cx={100 - nx() * 100} cy={ny() * 100} r={5} fill={'green'}/>
            </svg>
          </div>
          <div class={'absolute rocket-trajectory -translate-x-1/2 translate-y-1/2'}
               classList={{'visible': visible()}}>
            <ShuttleIcon width={'4rem'} style={{rotate: `${Math.asin(nx()) - Math.PI * 0.5}rad`}}/>
          </div>
        </div>
      </section>
    </>
  )
}