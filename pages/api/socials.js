import faker from '@faker-js/faker'

const generateSocialMediaProfiles = (count) => {
  const profiles = []

  for (let i = 0; i < count; i++) {
    const profile = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      bio: faker.lorem.sentences(),
      website: faker.internet.url(),
      followers: faker.random.number(),
      following: faker.random.number(),
      posts: [],
    }

    for (let j = 0; j < faker.random.number({ min: 10, max: 100 }); j++) {
      const post = {
        id: faker.datatype.uuid(),
        image: faker.image.image(),
        caption: faker.lorem.sentence(),
        likes: faker.random.number(),
        comments: faker.random.number(),
      }

      profile.posts.push(post)
    }

    profiles.push(profile)
  }

  return profiles
}

export default async function handler(req, res) {
  const { count } = req.query
  res
    .status(200)
    .json({ type: 'success', data: generateSocialMediaProfiles(count) })
}
