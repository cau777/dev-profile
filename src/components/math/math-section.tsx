import {Component, ParentComponent} from "solid-js";
import {ExponentialPath} from "~/components/util/exponential-path";

// TODO: use katex
const Equation: ParentComponent<{ title: string }> = (props) => {
  return (
    <div>
      <h5 class={'font-semibold'}>{props.title}</h5>
      <p class={'text-lg'}>
        {props.children}
      </p>
    </div>
  )
}

export const MathSection: Component = () => {
  return (
    <section class={'bg-gradient-radial from-blue-800 to-blue-900 w-screen h-screen snap-center'}>
      <div class={'p-8 h-full'}>
        <div class={'border-gray-100 border-2 p-8 h-full relative'}>

          <section class={'absolute'}>
            <h1 class={'font-bold text-4xl'}>I also love math and engineering</h1>
            <p class={'text-lg'}>The animation you saw was made entirely with math</p>

            <Equation title={'Line length'}>
              ∑  ∫
            </Equation>
          </section>

          <div class={'relative top-0 aspect-[2/1] max-h-full mx-auto'}>
            <svg class={'absolute text-gray-100'} width={'100%'} height={'100%'} viewBox={'0 0 300 150'}>
              <ExponentialPath stroke-dasharray={3} stroke-dashoffset={-1000 - 1000}/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}