import React, { ReactNode } from 'react'
import { card, cardContent, cardImage, cardMedia } from './Card.module.css'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type CardProps = {
  children: ReactNode
}
export const Card = (props: CardProps) => {
  const { children } = props

  return (
    <article className={card}>
      {children}
    </article>
  )
}

type CardMediaProps = {
  alt: string
  image: IGatsbyImageData
}
export const CardMedia = (props: CardMediaProps) => {
  const { image, alt } = props

  return (
    <div className={cardMedia}>
      <GatsbyImage
        alt={alt}
        image={image}
        className={cardImage}
      />                
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