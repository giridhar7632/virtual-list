import Card from '../components/Card'
import data from '../data.json'

export default function Home() {
	return (
		<div className='w-screen min-h-screen flex flex-wrap'>
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
		</div>
	)
}
