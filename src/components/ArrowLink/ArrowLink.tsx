import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { arrowLink } from './ArrowLink.module.css'

type Props = {
  className?: string
  title?: string,
  to?: string,
}

const ArrowLink = (props: Props) => {
  const {
    className,
    title = 'Go to homepage',
    to = '/'
  } = props

  return (
    <Link to={to} title={title} className={classNames(arrowLink, className)} />
  )
}

export default ArrowLink