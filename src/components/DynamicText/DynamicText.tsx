import React, { ReactNode, useEffect, useRef, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"

type Props = {
  children: ReactNode
  height: number
}

function setFontSize(element: HTMLParagraphElement, parent: HTMLDivElement) {
  let currentFontSize = 12
    let overflow = false
    element.style.fontSize = `${currentFontSize}px`

    while (!overflow && currentFontSize < 100) {
      element.style.fontSize = `${currentFontSize}px`
      overflow = parent.clientHeight < element.clientHeight
      if (!overflow) {
        currentFontSize = currentFontSize + 1
      }
    }
    element.style.fontSize = `${currentFontSize - 1}px`
}

const DynamicText = (props: Props) => {
  const { children: childrenProp, height } = props

  const [ready, setReady] = useState(false)
  const [children, setChildren] = useState(childrenProp)
  const windowSize = useWindowSize()
  
  const parentRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    setReady(false)

    setTimeout(() => {
      setChildren(childrenProp)
      if (!parentRef.current || !elementRef.current) {
        return
      }

      setFontSize(elementRef.current, parentRef.current)  
      setReady(true)
    })
  }, [childrenProp, height, parentRef, elementRef])

  useEffect(() => {
    if (!windowSize.width || !windowSize.height) {
      return
    }

    setReady(false)
    setTimeout(() => {
      if (!parentRef.current || !elementRef.current) {
        return
      }
      setFontSize(elementRef.current, parentRef.current)
      setReady(true)
    })
  }, [windowSize])

  return (
    <div
      ref={parentRef}
      style={{
        height: `${height}px`,
        opacity: ready ? 1 : 0
      }}>
      <p ref={elementRef} style={{ margin: 0 }}>
        {children}
      </p>
    </div>
  )
}

export default DynamicText