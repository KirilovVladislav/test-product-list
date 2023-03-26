export const getProducts = async (limit = 0, currentPage = 1) => {
  const skip = currentPage * limit - limit

  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
