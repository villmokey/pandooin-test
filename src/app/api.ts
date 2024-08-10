const getProducts = async () => {
  try {
    const response = await fetch(
      'https://pandooin.com/api/zamrood/itinerary?highlight=true',
    )
    return await response.json()
  } catch (error) {
    return error
  }
}
 
const getArticles = async () => {
  try {
    const response = await fetch(
      'https://pandooin.com/api/zamrood/article',
    )
    return await response.json()
  } catch (error) {
    return error
  }
}

export {
  getProducts,
  getArticles
}