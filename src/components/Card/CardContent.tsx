import React, { ReactNode } from 'react'
import {cardContent } from './Card.module.css'

type CardContentProps = {
  children: ReactNode
}
const CardContent = (props: CardContentProps) => {
  const { children } = props

  return (
    <div className={cardContent}>
      {children}
    </div>
  )
}
export default CardContent 