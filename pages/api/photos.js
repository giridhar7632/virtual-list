export default async function handler(req, res) {
  const { page } = req.query
  try {
    const request = await fetch(
      `https://api.unsplash.com/photos?client_id=${process.env.ACCESS_KEY}&page=${page}`
    )
    const data = await request.json()
    res.status(200).json({ type: 'success', data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ type: 'error', message: 'Something went wrong!' })
  }
}
