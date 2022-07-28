import React, { ReactNode, useEffect, useRef, useState } from "react"

type Props = {
  children: ReactNode
  height: number
}

const DynamicText = (props: Props) => {
  const { children: childrenProp, height } = props

  const [ready, setReady] = useState(false)
  const [children, setChildren] = useState(childrenProp)
  
  const parent = useRef<any>()
  const element = useRef<any>()

  useEffect(() => {
    setReady(false)

    setTimeout(() => {
      setChildren(childrenProp)
      if (!parent.current || !element.current) {
        return
      }
      let currentFontSize = 12
      let overflow = false
      element.current.style.fontSize = currentFontSize

      while (!overflow && currentFontSize < 100) {
        element.current.style.fontSize = `${currentFontSize}px`
        overflow = parent.current.clientHeight < element.current.clientHeight
        if (!overflow) {
          currentFontSize = currentFontSize + 1
        }
      }
      element.current.style.fontSize = `${currentFontSize - 1}px`
      setReady(true)
    })
  }, [childrenProp, height, parent, element])

  return (
    <div
      ref={parent}
      style={{
        height: `${height}px`,
        opacity: ready ? 1 : 0
      }}>
      <p ref={element} style={{ margin: 0 }}>
        {children}
      </p>
    </div>
  )
}

export default DynamicText