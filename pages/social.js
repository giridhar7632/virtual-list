import React, { useState, useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import { v4 as uuidv4 } from 'uuid'

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.image} alt="Post" />
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <ul className="comments">
        {post.comments.map((comment) => (
          <li key={uuidv4()}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts from API and set to state
  }, [])

  const Row = ({ index, style }) => {
    return <Post post={posts[index]} style={style} />
  }

  return (
    <div className="social-media-feed">
      <h1>My Social Media Feed</h1>
      <FixedSizeList
        height={600}
        itemCount={posts.length}
        itemSize={500}
        width={600}
      >
        {Row}
      </FixedSizeList>
    </div>
  )
}

export default SocialMediaFeed
