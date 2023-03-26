import { Badge } from '@/ui'
import Image from 'next/image'
import styles from './Card.module.css'

type Card = {
  id: number,
  title: string,
  rating: number,
  stock: number,
  brand: string,
  thumbnail: string,
  [key: string]: any,
}

type Props = {
  card: Card,
}

export const Card = ({ card }: Props) => {
  return (
    <article className={styles.card}>
      {/* <Image
        src={card?.thumbnail}
        alt={card.title}
        className={styles.image}
        width={100}
        height={100}
      /> */}
      <h4>{card.title}</h4>
      <span>{card.brand}</span>
      {card.rating > 4.3 &&
        <Badge title={card.stock > 50 ? 'new' : 'top'} />
      }
    </article>
  )
}