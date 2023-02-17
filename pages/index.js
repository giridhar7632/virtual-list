import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import Card from '../components/Card'
// import data from '../data.json'

export default function Home() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const { data: res } = await axios.get(`/api/photos?page=${currentPage}`)
        setData((prev) => [...prev, ...res.data])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="min-h-screen w-screen text-gray-800">
      <div className="mx-auto flex max-w-5xl flex-col">
        <nav className="my-2 flex w-full items-center justify-between py-2 px-4">
          <p className="font-bold">Photo Gallery</p>
          <a
            href={'https://github.com/giridhar7632/virtual-list'}
            className={'text-gray-600 hover:underline'}
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </nav>
        <main className="mx-auto max-w-full">
          <ul className="my-2 flex flex-wrap justify-center gap-1 px-2 sm:gap-2">
            {data.map((i, idx) => {
              console.log('i', i, 'idx', idx)
              return (
                <Card
                  key={idx}
                  id={i.id}
                  image={i?.urls.regular}
                  description={i.description}
                  alt={i.alt_description}
                  blurHash={i.blur_hash}
                  link={i.links.html}
                  width={i.width}
                  aspectRatio={i.width / i.height}
                  color={i.color}
                />
              )
            })}
          </ul>
          <button
            className="w-[50%] rounded-lg border-yellow-500 bg-yellow-500 py-2 px-4 text-center font-semibold text-white hover:ring-4 hover:ring-yellow-300"
            onClick={handleNextPage}
          >
            {isLoading ? 'Loading...' : 'Load more'}
          </button>
        </main>
        <footer className="mt-4 mb-6 text-center">
          Image source{' '}
          <a
            className={'text-gray-500 hover:underline'}
            href={'https://unsplash.com/'}
            target="_blank"
            rel="noreferrer noopener"
          >
            Unsplash API
          </a>
        </footer>
      </div>
    </div>
  )
}
