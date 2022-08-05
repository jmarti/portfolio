import React, { ReactNode } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import {
  card,
  variantNormal,
  variantInverted,
  cardContent,
  cardImage,
  cardMedia,
  cardTitle
} from './Card.module.css'
import classNames from 'classnames'

const variantClasses = {
  inverted: variantInverted
}

type CardProps = {
  children: ReactNode
  variant?: 'inverted'
}
export const Card = (props: CardProps) => {
  const { children, variant } = props

  return (
    <article className={classNames(
      card, 
      variant ? variantClasses[variant] : variantNormal
    )}>
      {children}
    </article>
  )
}

type CardMediaProps = {
  alt: string
  image: IGatsbyImageData
  href?: string,
  title?: string
}
export const CardMedia = (props: CardMediaProps) => {
  const { alt, href, title, image } = props

  const Image = () => (
    <GatsbyImage
      alt={alt}
      image={image}
      className={cardImage}
    />
  )

  return (
    <div className={cardMedia}>
      {href ? (
        <a href={href} title={title} target="_blank">
          <Image />
        </a>
      ) : (
        <Image />
      )}
    </div>
  )
}

type CardContentProps = {
  children: ReactNode
}
export const CardContent = (props: CardContentProps) => {
  const { children } = props

  return (
    <div className={cardContent}>
      {children}
    </div>
  )
}

type CardTitleProps = {
  children: ReactNode
}
export const CardTitle = (props: CardTitleProps) => {
  const { children } = props

  return (
    <h2 className={cardTitle}>
      {children}
    </h2>
  )
}