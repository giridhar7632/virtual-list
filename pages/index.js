import Card from '../components/Card'
import data from '../data.json'

export default function Home() {
  return (
    <div className="min-h-screen w-screen text-gray-800">
      <div className="mx-auto flex max-w-5xl flex-col">
        <nav className="my-2 flex w-full items-center justify-between py-2 px-4">
          <p className="font-bold">Photo Gallery</p>
          <a
            href={'https://github.com/giridhar7632/enimage'}
            className={'text-gray-600 hover:underline'}
          >
            Source code
          </a>
        </nav>
        <main className="mx-auto max-w-full">
          <ul className="group my-2 flex flex-wrap justify-center gap-1 px-2 hover:grayscale sm:gap-2">
            {data.photos.map((i) => (
              <Card
                key={i.id}
                id={i.id}
                image={i.urls.regular}
                description={i.description}
                alt={i.alt_description}
                blurHash={i.blur_hash}
                link={i.links.html}
                width={i.width}
                aspectRatio={i.width / i.height}
                color={i.color}
              />
            ))}
          </ul>
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
