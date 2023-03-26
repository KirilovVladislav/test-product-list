import { Card } from '@/components'
import styles from './Catalog.module.css'

type Props = {
  list: any[]
}

export const Catalog = ({ list }: Props) => {
  return (
    <section className={styles.catalog}>
      {list.map((item: any) => (
        <Card key={item.id} card={item} />
      ))}
    </section>
  )
}