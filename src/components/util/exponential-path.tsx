import { Component, JSX, ParentComponent } from "solid-js"

class ExponentialFunction {
  public constructor(private readonly factor: number) {}

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
    const factor2 = this.factor * this.factor
    const l1 =
      0.5 * Math.log(Math.sqrt(1 + factor2 * Math.exp(2 * this.factor * b)) + 1)
    const l2 =
      -0.5 *
      Math.log(Math.sqrt(1 + factor2 * Math.exp(2 * this.factor * b)) - 1)
    const l3 =
      -0.5 *
      Math.log(Math.sqrt(1 + factor2 * Math.exp(2 * this.factor * a)) + 1)
    const l4 =
      0.5 * Math.log(Math.sqrt(1 + factor2 * Math.exp(2 * this.factor * a)) - 1)
    const l5 = -Math.sqrt(1 + factor2 * Math.exp(2 * this.factor * b))
    const l6 = Math.sqrt(1 + factor2 * Math.exp(2 * this.factor * a))
    return -(l1 + l2 + l3 + l4 + l5 + l6) / this.factor
  }
}

export const fn = new ExponentialFunction(1 / (2 * Math.PI))

export const projection = (() => {
  const graphXStart = -2
  const graphXEnd = 28
  const graphWidth = graphXEnd - graphXStart

  const graphYStart = fn.apply(graphXStart)
  const graphYEnd = 15 + fn.apply(graphXStart)
  const graphHeight = graphYEnd - graphYStart
  return {
    graphXStart,
    graphXEnd,
    graphWidth,
    graphYStart,
    graphYEnd,
    graphHeight,
  }
})()

export const ExponentialPath: ParentComponent<
  JSX.PathSVGAttributes<SVGPathElement>
> = (props) => {
  const offset = projection.graphYStart * 10
  return (
    <path
      d={`M 0 150 C 92.658 ${150 - (18.037 - offset)}, 149.240 ${
        150 - (47.848 - offset)
      }, 193 0`}
      fill={"transparent"}
      stroke={"currentcolor"}
      {...props}
    />
  )
}
