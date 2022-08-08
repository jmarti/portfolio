import React, { ReactNode } from 'react'
import {
  card,
  variantNormal,
  variantInverted
} from './Card.module.css'
import classNames from 'classnames'

const variantClasses = {
  inverted: variantInverted,
  normal: variantNormal
}

type CardProps = {
  children: ReactNode
  className: 'string'
  variant?: 'inverted'
}
const Card = (props: CardProps) => {
  const { children, className, variant = 'normal' } = props

  return (
    <article className={classNames(
      card, 
      variantClasses[variant] || variantNormal,
      className
    )}>
      {children}
    </article>
  )
}
export default Card