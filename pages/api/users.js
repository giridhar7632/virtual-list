import { faker } from '@faker-js/faker'

const generateUserProfiles = (count) => {
  const users = []

  for (let i = 0; i < count; i++) {
    const user = {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
      },
      profileImage: faker.image.avatar(),
    }

    users.push(user)
  }

  return users
}

export default async function handler(req, res) {
  const { count } = req.query
  res.status(200).json({ type: 'success', data: generateUserProfiles(count) })
}
