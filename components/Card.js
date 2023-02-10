import Image from 'next/image'
import Link from 'next/link'

const Card = ({
	id,
	image,
	alt,
	blurHash,
	link,
	width,
	aspectRatio,
	color,
}) => (
	<div
		id={id}
		className={`max-w-sm relative rounded overflow-hidden shadow-lg bg-['${color}']`}
		style={{ aspectRatio, width }}>
		<Link href={link} target='_blank' rel='noreferrer'>
			<Image
				src={image}
				alt={alt ? alt : ''}
				placeholder={blurHash}
				style={{ objectFit: 'contain', objectPosition: 'center' }}
				fill
			/>
		</Link>
	</div>
)

export default Card
