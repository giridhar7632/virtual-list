import Image from 'next/image'
import Link from 'next/link'

const User = ({
  firstName,
  lastName,
  email,
  phone,
  address: { street, city, state, country, zip },
  profileImage,
}) => {
  return (
    <div className="my-2 flex items-center gap-6 rounded border-neutral-300 bg-neutral-100 p-6 shadow-sm hover:shadow-md md:p-12">
      <Image
        width={50}
        height={50}
        src={profileImage}
        alt={'profile picture'}
      />
      <div className="flex flex-col">
        <h2 className="text-xl">{`${firstName} ${lastName}`}</h2>
        <Link href={`mailto:${email}`}>{email}</Link>
        <Link href={`phone:${phone}`}>{phone}</Link>
        <p className="mt-2 font-bold">Address:</p>
        <p>{`${street}, ${city},`}</p>
        <p>{`${state}, ${country} - ${zip}`}</p>
      </div>
    </div>
  )
}

export default User
