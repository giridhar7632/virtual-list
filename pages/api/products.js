import { faker } from '@faker-js/faker'

const generateEcommerceProducts = (count) => {
  const products = []

  for (let i = 0; i < count; i++) {
    const product = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      category: faker.commerce.department(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      rating: {
        stars: faker.datatype.number({ min: 1, max: 5 }),
        reviews: faker.datatype.number({ min: 1, max: 100 }),
      },
    }

    products.push(product)
  }

  return products
}

export default async function handler(req, res) {
  const { count } = req.query
  res
    .status(200)
    .json({ type: 'success', data: generateEcommerceProducts(count) })
}
