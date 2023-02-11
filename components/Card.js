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
  <li
    id={id}
    className={`relative max-w-[49%] grow overflow-hidden rounded md:max-w-[32%] bg-[${color}]`}
    style={{ aspectRatio, width }}
  >
    <Link href={link} target="_blank" rel="noreferrer">
      <Image
        src={image}
        alt={alt ? alt : ''}
        placeholder={blurHash}
        className={`max-h-full min-w-full object-cover object-center duration-300 hover:scale-110`}
        fill
      />
    </Link>
  </li>
)

export default Card
