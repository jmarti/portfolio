import React, { useState } from 'react'
import { useStaticQuery, graphql, PageProps } from 'gatsby'
import { Transition, TransitionGroup } from 'react-transition-group';

import {
  homepage,
  page,
  entered,
  entering,
  exited,
  exiting,
  content,
} from './LayoutMain.module.css';

import { useThemeContext } from '../../theme.context';
import Loading from '../../components/Loading';
import { LayoutMainProvider, useLayoutMainContext } from './LayoutMain.context';
import { isHomepage } from '../../utils';

const LayoutMain = ({ children, location, uri }: PageProps) => {

  const data: Queries.LayoutQuery = useStaticQuery(graphql`
    query LayoutMain {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { loading } = useThemeContext()
  const { pageTitle } = useLayoutMainContext()
  const [ navigationToHomepage, setNavigationToHomepage ] = useState(uri === '/')

  const stateClases = {
    entered,
    entering,
    exited,
    exiting,
    unmounted: null
  }

  const handleEntering = (node: HTMLElement) => {
    const homepage = isHomepage(node)

    if (window.outerHeight < document.body.clientHeight && window.outerHeight > node.clientHeight) {
      document.body.style.overflow = 'hidden'
    }

    setNavigationToHomepage(homepage)
    if (homepage) {
      node.style.marginTop = `${-node.clientHeight}px`
      setTimeout(() => {
        node.style.marginTop = '0'
      })
    }
  }

  const handleExiting = (node: HTMLElement) => {
    node.style.marginTop = navigationToHomepage ? `${-node.clientHeight}px` : `${node.clientHeight}px`
  }

  const handleExited = () => {
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <title>{pageTitle && `${pageTitle} | ` }{data.site.siteMetadata.title}</title>
      {/* {loading && <Loading />} */}
      <div className={content}>
        <TransitionGroup component={null}>
          <Transition
            key={location.pathname}
            timeout={{ enter: 300, exit: 300 }}
            onEntering={handleEntering}
            onExiting={handleExiting}
            onExited={handleExited}
          >
            {state => (
              <main className={`${navigationToHomepage && !['exiting', 'exited'].includes(state) && homepage } ${page} ${stateClases[state]}`}>
                {children}
              </main>
            )}
          </Transition>
        </TransitionGroup>
      </div>
    </>
  )
}

export default (props: PageProps) => (
  <LayoutMainProvider>
    <LayoutMain {...props}/>
  </LayoutMainProvider>
)