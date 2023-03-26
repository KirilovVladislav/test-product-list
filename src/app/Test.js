'use client'

import { use, useCallback, useEffect, useState } from 'react'

export const Test = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <h1>Test</h1>
      <button onClick={() => setCurrentPage((prev) => prev - 1)}>prev</button>
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>next</button>
      <h1>{currentPage}</h1>
    </>
  )
}