export default async function getPostList(token = null, defaultPage = 1) {
  const currentPage = defaultPage * 1
  try {
    const response = await fetch(`https://blog.kata.academy/api/articles?limit=10&offset=${currentPage}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
    if (response.ok) {
      return await response.json()
    }
    throw new Error(`${response.status}`)
  } catch (err) {
    return Promise.reject(err)
  }
}
