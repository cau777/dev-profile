import { Component } from "solid-js"
import { AnchorProps } from "@solidjs/router"
import { A } from "solid-start"

export const CustomLink: Component<AnchorProps> = (props) => {
  return <A {...props} class={props.class + " underline"} target={"_blank"}>{props.children}</A>
}