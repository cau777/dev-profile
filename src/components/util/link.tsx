import { JSX, ParentComponent } from "solid-js"

export const Link: ParentComponent<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>
> = (props) => {
  return (
    <a {...props} class={"font-semibold"}>
      {props.children}
    </a>
  )
}
