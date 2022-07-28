import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { card } from './Card.module.css'

type Props = {
  className: string
  children: ReactNode
}

const Card = (props: Props) => {
  const { children, className } = props

  return (
    <article className={classNames(card, className)}>
      {children}
    </article>
  )
}

export default Card