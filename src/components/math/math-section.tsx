import {Component, createEffect, createSignal, For, Index, ParentComponent} from "solid-js";
import {ExponentialPath} from "~/components/util/exponential-path";
import katex from 'katex'
import {RocketSectionProps} from "~/components/rocket-super-section/rocket-super-section";

const Equation: ParentComponent<{ title: string, tex: string }> = (props) => {
  const [opened, setOpened] = createSignal(false)
  const core = <div/> as HTMLDivElement

  createEffect(() => {
    katex.render(props.tex, core, {
      output: 'html',
    })
  })

  return (
    <>
      <div class={'flex'}>
        <div class={'border-2 rounded p-2'}>
          <h5 class={'font-semibold font-lg mb-2'}>{props.title}</h5>
          <p class={'text-xl'}>
            {core}
          </p>
        </div>
      </div>
      <p class={'overflow-y-hidden transition-all duration-1000 max-w-xl text-justify'}
         style={{'opacity': opened() ? '1' : '0', 'height': opened() ? 'auto' : '0'}}
      >{props.children}</p>
      <button class={'mt-0.5 mb-3 text-sm cursor-pointer text-left'}
              onClick={() => setOpened(v => !v)}>{opened() ? '-' : '+'} Explanation
      </button>
    </>
  )
}

export const Graph: Component = () => {
  return (
    <>
      <ExponentialPath stroke-dasharray={3} stroke-dashoffset={-1000 - 1000} stroke-width='0.8'/>
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
    </>
  )
}

export const MathSection: ParentComponent<RocketSectionProps> = (props) => {
  // TODO: dobra papel
  return (
    <section class={'bg-gradient-radial via-blue-900 from-blue-800 to-blue-950 w-screen h-screen snap-center'}>
      <div class={'p-8 h-full'}>
        <div class={'border-gray-100 border-2 p-8 h-full'}>
          <header class={'mb-6'}>
            <h1 class={'font-bold text-4xl'}>I also love math and engineering</h1>
            <p class={'text-lg'}>The animation you just saw was made entirely with Calculus</p>
          </header>

          <div class={'flex flex-wrap'}>
            <div class={'max-w-xl grow mb-auto'}>
              {props.children}
            </div>

            <div class={'flex flex-col'}>
              <Equation title={'Rocket Position'} tex={"f(x) = {e}^{x/{\\tau}}"}>
                This function is an exponential of x divided by tau (2 * pi). I don't remember exactly where I saw it
                but I chose it mainly because this function looked nice as an ascending trajectory. Also, exponentials
                are easy to derive/integrate.
              </Equation>
              <Equation title={'Rocket Angle'} tex={"{tan}^{-1}({f}'(x))"}>
                Since a derivative is, by definition, the inclination of a tangent line at any point of a function, it's
                possible to get the angle of that tangent line with arctan. It also makes sense on the way that a
                derivative is the "rate of change" so, pointing the rocket in the angle of change makes it look like
                it's surfing on the curve.
              </Equation>
              <Equation title={'Trajectory Line Length'}
                        tex={"\\sum_{i=1}^{\\infty }\\sqrt{{\\Delta x_{i}}^{2}+{\\Delta y_{i}}^{2}} = \\int_{a}^{b}\\sqrt{1+{{f}'(x)}^2}"}>
                This one is more complicated and took some time to get right. Basically, to animate the rocket
                trajectory
                like as an svg path, we need the traveled line length at any time. If this graph was linear, this would
                as simple as applying the Pythagorean Theorem. However, we can think of that complex curve as many
                straight lines that, when summed up, makes for an approximation of the curve. Integrals then help
                solving
                this "sum of infinite infinitely small things" problem. Although there are some examples of similar
                problems out there, I'm proud that I came up with this solution on my own.
              </Equation>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}