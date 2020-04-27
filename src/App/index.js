import React, { useState, useEffect } from 'react'
import "./App.css"
import axios from "axios"
import { Route, Link } from "react-router-dom"
import Header from "../Header"
import Page from "../Page"

export default function App() {

  //https://newsapi.org/v2/everything?q=nintendo&apiKey=06c96a58f8e3440fb062458011a729da

  const baseUrl = "https://newsapi.org/v2/everything?q="
  const apiKey = "&apiKey=06c96a58f8e3440fb062458011a729da"

  const [inputValue, setInputValue] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = useState("")

  const search = (e) => {
    // setSearchQuery(inputValue)
    queryApi(inputValue)
  }

  //this queries the api, and it gets called when a user does a search
  const queryApi = async (query) => {
    const result = await axios(`${baseUrl}${query}${apiKey}`)
    console.log(result)
    setData(result.data.articles)
  }

  //if the api call has happened after a search is executed, display page component with data passed to it
  const showPage = () => {
    if (data) {
      return (
        <Page
          data={data}
        />
      )
    }
  }

  return (
    <div>


      <Header
        search={search}
        setInputValue={setInputValue}
      />


      {showPage()}


    </div>
  )
}
