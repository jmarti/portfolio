import React, { ReactNode } from 'react'
import { pageTitle, h1, wrapper } from './PageTitle.module.css'
type Props = {
  children: ReactNode
}

const PageTitle = (props: Props) => {
  const { children } = props
  return (
    <div className={pageTitle}>
      <div className={wrapper}>
        <h1 className={h1}>{children}</h1>
      </div>
    </div>
  )
}

export default PageTitle