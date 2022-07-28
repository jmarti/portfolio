import React, { ReactNode } from 'react'
import { h1 } from './H1.module.css'
type Props = {
  children: ReactNode
}

const H1 = (props: Props) => {
  const { children } = props
  return (
    <h1 className={h1}>{children}</h1>
  )
}

export default H1