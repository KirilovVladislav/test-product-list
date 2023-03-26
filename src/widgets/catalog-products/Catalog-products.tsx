'use client'

import { getProducts } from '@/app/api/products'
import { Catalog, Pagination } from '@/features'
import { useCallback, useEffect, useState } from 'react'

const LIMIT_SIZE = 20

export const CatalogProducts = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])
  const [quantityPages, setQuantityPages] = useState(1)

  useEffect(() => {
    getProducts(LIMIT_SIZE, currentPage).then((data) => {
      setProducts(data.products)
      setQuantityPages(Math.ceil(data.total / data.limit))
    })
  }, [currentPage])

  const goToPage = useCallback((page: number) => {
    if (page > 0) {
      setCurrentPage(page)
    } else if (page < 0) {
      setCurrentPage((prev) => prev + page)
    } else if (page === 0) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [])

  return (
    <>
      {products.length
        ? <Catalog list={products} />
        : <h3>Loading...</h3>
      }
      <Pagination
        quantityPages={quantityPages}
        currentPage={currentPage}
        setCurrentPage={goToPage} />
    </>
  )
}
