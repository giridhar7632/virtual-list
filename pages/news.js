import React, { useState, useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import { v4 as uuidv4 } from 'uuid'

const Article = ({ article }) => {
  return (
    <div className="article">
      <img src={article.image} alt="Article" />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
    </div>
  )
}

const NewsFeed = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // Fetch articles from API and set to state
  }, [])

  const Row = ({ index, style }) => {
    return <Article article={articles[index]} style={style} />
  }

  return (
    <div className="news-feed">
      <h1>Today&apos;s Top Stories</h1>
      <FixedSizeList
        height={600}
        itemCount={articles.length}
        itemSize={350}
        width={600}
      >
        {Row}
      </FixedSizeList>
    </div>
  )
}

export default NewsFeed
