import React from 'react'
import NewsCard from "../NewsCard"
import "./Page.scss"

export default function Page({ data }) {
  return (
    <main className="Page">

      {data.articles.map((article, index) =>
        <NewsCard
          key={index}
          index={index}
          articles={data.articles}
        />

      )}


    </main>
  )
}
