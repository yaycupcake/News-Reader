import React from 'react'
import "./NewsCard.scss"
import { ReactComponent as ExternalLinkIcon } from "../external-link-alt-solid.svg"
export default function index({ articles, index, showImages }) {

  const article = articles[index]

  const renderNewsCard = () => {
    if (articles) {
      return (
        <div>
          <h2>
            {article.title}&nbsp;
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon height={`.75em`} />
            </a>
          </h2>
          <span
            className="source"
          >
            {
              article.source.name
                ? article.source.name
                : "unknown"
            }
          </span>
          <span
            className="author"
          >
            {
              article.author
                ? article.author
                : "unknown"
            }
          </span>
          <article>
            <p className="article">
              {article.description ? article.description : article.content}
            </p>
            {renderNewsCardImage()}
          </article>
        </div>
      )
    }
  }

  const renderNewsCardImage = () => {

    if (!article.urlToImage || !showImages) {
      return
    } else {
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

