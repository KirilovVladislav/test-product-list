import { Toggler } from '@/components'
import { Button } from '@/ui'
import styles from './Pagination.module.css'

type Props = {
  quantityPages: number,
  setCurrentPage: (page: number) => void,
  currentPage: number,
}

export const Pagination = ({ quantityPages = 1, setCurrentPage, currentPage }: Props) => {
  const pageNumbers = Array.from(
    { length: quantityPages },
    (_, index) => index + 1
  )

  return (
    <section className={styles.pagination}>
      <Button disabled={currentPage === 1} onClick={() => setCurrentPage(-1)} >Prev</Button>
      <Toggler
        buttons={pageNumbers}
        currentButton={currentPage}
        handleClick={setCurrentPage} />
      <Button disabled={currentPage === quantityPages} onClick={() => setCurrentPage(0)} >Next</Button>
    </section>
  )
}