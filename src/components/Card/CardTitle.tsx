import React, { ReactNode } from 'react'
import { cardTitle } from './Card.module.css'

type CardTitleProps = {
  children: ReactNode
}
const CardTitle = (props: CardTitleProps) => {
  const { children } = props

  return (
    <h2 className={cardTitle}>
      {children}
    </h2>
  )
}
export default CardTitle