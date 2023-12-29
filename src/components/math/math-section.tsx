import {Component, createEffect, createSignal, For, Index, ParentComponent} from "solid-js";
import {ExponentialPath} from "~/components/util/exponential-path";
import katex from 'katex'

const Equation: Component<{ title: string, tex: string }> = (props) => {
  const core = <div/> as HTMLDivElement

  createEffect(() => {
    katex.render(props.tex, core, {
      output: 'html',
    })
  })

  return (
    <div class={'flex'}>
      <div class={'border-2 rounded p-2'}>
        <h5 class={'font-semibold font-lg mb-2'}>{props.title}</h5>
        <p class={'text-xl'}>
          {core}
        </p>
      </div>
    </div>
  )
}

const Graph: Component = () => {
  const [visible, setVisible] = createSignal(false)
  const observer = new IntersectionObserver((entries) => entries[0].isIntersecting && setVisible(true), {
    root: null,
    threshold: 0.95
  })

  const element = (
    <svg class={'text-gray-100 max-w-xl'} width={'100%'} height={'100%'} viewBox={'0 0 200 150'}>
      <ExponentialPath stroke-dasharray={3} stroke-dashoffset={-1000 - 1000}/>
      <line x1={0} y1={150} x2={200} y2={150} stroke={'currentcolor'} stroke-width={2}/>
      <line x1={0} y1={150} x2={0} y2={0} stroke={'currentcolor'} stroke-width={2}/>
      <g>
        <Index each={Array.from({length: 15})}>
          {(_, index) => {
            const y = 10 * index
            return (
              <line x1={0} x2={200} y1={y} y2={y} stroke={'currentcolor'} opacity={0.1}/>
            );
          }}
        </Index>

        <Index each={Array.from({length: 20})}>
          {(_, index) => {
            const x = 10 * (index + 1)
            return (
              <line x1={x} x2={x} y1={150} y2={0} stroke={'currentcolor'} opacity={0.05}/>
            );
          }}
        </Index>
      </g>
    </svg>
  )

  observer.observe(element as SVGElement)
  return element
}

export const MathSection: Component = () => {
  return (
    <section class={'bg-gradient-radial via-blue-900 from-blue-800 to-blue-950 w-screen h-screen snap-center'}>
      <div class={'p-8 h-full'}>
        <div class={'border-gray-100 border-2 p-8 h-full'}>
          <header class={''}>
            <h1 class={'font-bold text-4xl'}>I also love math and engineering</h1>
            <p class={'text-lg'}>The animation you just saw was made entirely with math</p>


          </header>

          <div class={'flex flex-wrap gap-4'}>
            <div class={'max-w-xl grow'}>
              <Graph/>
            </div>

            <div class={'flex gap-2 flex-col'}>
              <Equation title={'Rocket Position'} tex={"f(x) = {e}^{x/{\\tau}}"}/>
              <Equation title={'Rocket Angle'} tex={"{tan}^{-1}({f}'(x))"}/>
              <Equation title={'Trajectory Line Length'}
                        tex={"\\sum_{i=1}^{\\infty }\\sqrt{{\\Delta x_{i}}^{2}+{\\Delta y_{i}}^{2}} = \\int_{a}^{b}\\sqrt{1+{{f}'(x)}^2}"}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}