import React from "react"
import { storiesOf } from "@storybook/react"
import NewsCard from "./index"


const articles = [
  {
    "source": {
      "id": null,
      "name": "Lifehacker.com"
    },
    "author": "Emily Price",
    "title": "You Should Set Up Two-Step Verification on Your Nintendo Account Right Now",
    "description": "If you have a Nintendo account, now’s a good time to make sure that you have two-step verification set up on that account to keep it secure.Read more...",
    "url": "https://lifehacker.com/you-should-set-up-two-step-verification-on-your-nintend-1842967392",
    "urlToImage": null,
    "publishedAt": "2020-04-20T20:45:00Z",
    "content": "If you have a Nintendo account, nows a good time to make sure that you have two-step verification set up on that account to keep it secure.\r\nNintendo makes two-step verification optional for its accounts but has recently started a small social media campaign … [+1601 chars]"
  },
  {
    "source": {
      "id": "mashable",
      "name": "Mashable"
    },
    "author": "Nicole Gallucci",
    "title": "Scenes from 'The Office' recreated in 'Animal Crossing' are absolute perfection",
    "description": "Some people believe celebrity-packed films like Avengers: Endgame are the most ambitious crossover events in history, but those people have likely never seen their favorite scenes from The Office recreated in Animal Crossing. The Office and Animal Crossing: N…",
    "url": "https://mashable.com/article/animal-crossing-the-office-scenes/",
    "urlToImage": "https://mondrian.mashable.com/2020%252F04%252F15%252F22%252F07b3bc003cbf40539a15438777689f83.7ad92.png%252F1200x630.png?signature=Aj42t7unsuma6KOsXaCQuLQd9Cs=",
    "publishedAt": "2020-04-15T16:33:45Z",
    "content": "Some people believe celebrity-packed films like Avengers: Endgame are the most ambitious crossover events in history, but those people have likely never seen their favorite scenes from The Office recreated in Animal Crossing.\r\nThe Office and Animal Crossing: … [+1705 chars]"
  }
]

storiesOf('NewsCard', module)
  .add('Article (No Image)', () =>
    <NewsCard
      index={0}
      articles={articles}
    />
  )
  .add('Article (Image)', () =>
    <NewsCard
      index={1}
      articles={articles}
    />
  )

