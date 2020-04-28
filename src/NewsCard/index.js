import React from 'react'
import "./NewsCard.scss"

export default function index({ articles, index, showImages }) {

  const article = articles[index]

  const renderNewsCard = () => {
    if (articles) {
      return (
        <div>
          <h2>{article.title}</h2>
          <span className="source">{article.source.name}</span>
          <span className="author">{article.author}</span>
          <p className="article">{article.content}</p>
          {renderNewsCardImage()}
        </div>
      )
    }
  }

  const renderNewsCardImage = () => {

    if (article.urlToImage && showImages) {
      return (
        <img
          className="article-image"
          src={article.urlToImage}
          alt={`${article.title}`}
        />
      )
    }
  }

  return (
    <section className="NewsCard">

      {renderNewsCard()}

    </section>
  )
}

