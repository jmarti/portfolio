import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import {
  cardImage,
  cardMedia,
} from './Card.module.css'

type CardMediaProps = {
  alt: string
  image: IGatsbyImageData
  href?: string,
  title?: string
}
const CardMedia = (props: CardMediaProps) => {
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
export default CardMedia