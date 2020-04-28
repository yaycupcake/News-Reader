import React, { useState } from 'react'
import "./App.scss"
import axios from "axios"
import { Route, Link } from "react-router-dom"
import Header from "../Header"
import Page from "../Page"
import Settings from "../Settings"
import Button from "../Button"

export default function App() {

  const baseUrl = "https://newsapi.org/v2/everything?q="
  const apiKey = "&apiKey=06c96a58f8e3440fb062458011a729da"

  const [inputValue, setInputValue] = useState("")
  const [data, setData] = useState("")
  const [color, setColor] = useState("light")
  const [showImages, setShowImages] = useState(true)

  //fires the query api function based on the current value of the input
  const search = () => {
    if (inputValue) {
      queryApi(inputValue)
    } else {
      alert("Please enter a search query!")
    }
  }

  //this queries the api, and it gets called when a user does a search
  const queryApi = async (query) => {
    const result = await axios(`${baseUrl}${query}${apiKey}`)
    setData(result.data)
  }

  //if the api call has happened after a search is executed, display page component with data passed to it
  const showPage = () => {
    if (data && !data.totalResults) {
      return (
        <p>No News Found.</p>
      )
    } else if (data) {
      return (
        <Page
          data={data}
          showImages={showImages}
        />
      )
    }
  }

  return (
    <div className={`App ${color}`}>


      <Route path="/">
        <Header
          search={search}
          setInputValue={setInputValue}
        />

        {showPage()}
      </Route>

      <Link to="/settings">
        <Button
          className="to-settings"
          value="Settings"
        />
      </Link>


      {/* add settings route */}

      <Route path="/settings">
        <Settings
          setColor={setColor}
          setShowImages={setShowImages}
        />
      </Route>


    </div>
  )
}
