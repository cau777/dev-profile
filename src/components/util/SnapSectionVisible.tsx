import {Component, createEffect, createSignal, ParentComponent} from "solid-js";
import {createMemoObject} from "@solidjs/router/dist/utils";

type Props = {
  onVisible?: () => void
  threshold: number
}

export const SnapSectionVisible: ParentComponent<Props> = (props) => {
  const [visible, setVisible] = createSignal(false)
  const [autoScrolling, setAutoScrolling] = createSignal(false)

  const visibleObserver = new IntersectionObserver((entries) => {
    setVisible(entries[0].isIntersecting)
  }, {
    root: null,
    threshold: props.threshold,
  })

  const preventScroll = (e: Event) => {
    if (!autoScrolling()) return
    e.preventDefault()
    e.stopPropagation()
  }

  document.addEventListener('wheel', preventScroll, {passive: false})

  const element = <div>{props.children}</div> as HTMLDivElement
  visibleObserver.observe(element)

  createEffect(() => {
    if (visible()) {
      props.onVisible?.()

      window.requestAnimationFrame(() => {
        setAutoScrolling(true)
      })

      setTimeout(() => {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
        })
      }, 100)

      setTimeout(() => setAutoScrolling(false), 10000)
    }
  })

  return element
}