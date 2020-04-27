import React, { useState, useEffect } from 'react'
import "./App.scss"
import axios from "axios"
import { Route, Link } from "react-router-dom"
import Header from "../Header"
import Page from "../Page"
import Settings from "../Settings"

export default function App() {

  const baseUrl = "https://newsapi.org/v2/everything?q="
  const apiKey = "&apiKey=06c96a58f8e3440fb062458011a729da"

  const [inputValue, setInputValue] = useState("")
  const [data, setData] = useState("")

  //fires the query api function based on the current value of the input
  const search = () => {
    if (inputValue) {
      queryApi(inputValue)
    }
  }

  //this queries the api, and it gets called when a user does a search
  const queryApi = async (query) => {
    const result = await axios(`${baseUrl}${query}${apiKey}`)
    console.log(result);
    setData(result.data)
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
    <div className="App">


      <Route path="/">
        <Header
          search={search}
          setInputValue={setInputValue}
        />

        {showPage()}
      </Route>

      <Link to="/settings">
        <button>Settings</button>
      </Link>


      {/* add settings route */}

      <Route path="/settings">
        <Settings />
      </Route>


    </div>
  )
}
