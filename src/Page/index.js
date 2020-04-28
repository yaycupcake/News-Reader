import React from 'react'
import NewsCard from "../NewsCard"
import "./Page.scss"

export default function Page({ data, showImages }) {
  return (
    <main className="Page">

      {data.articles.map((article, index) =>
        <NewsCard
          key={index}
          index={index}
          articles={data.articles}
          showImages={showImages}
        />

      )}


    </main>
  )
}
