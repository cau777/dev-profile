import {Component, createEffect, createSignal, onCleanup} from "solid-js";
import {ShuttleIcon} from "~/icons/shuttle";
import {SnapSectionVisible} from "~/components/util/SnapSectionVisible";
import {LifePoint} from "~/components/carreer/LifePoint";
import {Link} from "~/components/util/Link";


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

const animationDuration = 10_000

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

  const offset = graphYStart * 10

  const animationFrame = (
    <div class={'relative aspect-[2/1] max-h-full mx-auto'}>
      <svg class={'absolute top-0'} width={'100%'} height={'100%'} viewBox={`0 0 300 150`}
      >
        {/* TODO: fix line */}
        <path d={`M 0 150 C 98.9 ${150-(18.6-offset)}, 150 ${150-(52.7-offset)}, 193 0`} stroke="white"
              fill="transparent" stroke-dasharray={1000} stroke-dashoffset={-1000 - lineLength()}/>
        <LifePoint visible={lineLength() > 12} title='First line of code' time={'Start of 2018'} direction={'up'} x={18}
                   y={147}
                   length={80}>
          I wanted to create a high-tech Minecraft mod, but that was way too difficult with no coding experience (but
          that didn't stop me)
        </LifePoint>
        <LifePoint visible={lineLength() > 28} title='Started learning Python' time={'Middle of 2018'} direction={'up'}
                   x={31} y={145}
                   length={40}>
          I decided to start learning Python (because it's more beginner friendly) with some free tutorials online
        </LifePoint>
        <LifePoint visible={lineLength() > 73} title='Simple programs for Hobby' time={'2018-2020'} direction={'right'}
                   x={70} y={135} length={40}>
          I switched to C# because of WinForms for easy GUI and made over 30 programs (yes, I still have the
          folder) mainly for solving the math concepts I learned at school
        </LifePoint>
        <LifePoint visible={lineLength() > 130} title='JetBrains Academy' time={'2020-2022'} direction={'right'}
                   x={118} y={110} length={40}>
          With <Link href='https://education.github.com/pack' target={'_blank'}>GitHub Education</Link>, I got access
          to <Link href='https://www.jetbrains.com/pt-br/academy/' target={'_blank'}>JetBrains Academy</Link> (a
          project-based learning platform), where I studied Python and Java by making over 20 open-source project
          on <Link href={'https://github.com/cau777'} target={'_blank'}>My GitHub</Link>
        </LifePoint>
        <LifePoint visible={lineLength() > 176} title='Built an AI from scratch' time={'2022-2023'} direction={'right'}
                   x={150} y={78} length={40}>
          My proudest open-source project so far: A GPU-accelerated deep learning library built in Rust almost from
          scratch. Plus an online playground to use it to recognize digits (MNIST dataset).
          <Link href={'https://github.com/cau777/ai_playground'} target={'_blank'}>Check it here!</Link>
        </LifePoint>
        <LifePoint visible={lineLength() > 200} title='Intern at Aerial' time={'April 2023'} direction={'right'}
                   x={165} y={56} length={25}>
          Despite my lack of professional experience, <Link href='https://www.linkedin.com/in/tianhuili/'
                                                            target={'_blank'}>Michael Li</Link> gave me an opportunity
          to work at <Link href={'https://aerialops.io/'} target={'_blank'}>Aerial</Link> as an intern for a couple of
          months
        </LifePoint>
        <LifePoint visible={lineLength() > 230} title='Full-Stack Developer' time={'September 2023'} direction={'left'}
                   x={180} y={30} length={120}>
          After the internship period was over, I joined Aerial as a Full-Stack Developer
        </LifePoint>
        <LifePoint visible={lineLength() > 235} title='Full-Stack Developer' time={'October 2023'} direction={'right'}
                   x={184} y={25} length={10}>
          I got promoted and got more responsibilities, like ML in Python and code reviews
        </LifePoint>
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
      </div>
      {animationFrame}
    </section>
  )
}