import React, { useState, useEffect } from 'react'
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
  const [error, setError] = useState("")


  useEffect(() => {
    setError(data && !data.totalResults ? "No results found for that query." : "")
  }, [data])


  //fires the query api function based on the current value of the input
  const search = () => {
    if (inputValue) {
      setError("") //clears any previous error message
      queryApi(inputValue)
    } else {
      setError("Please enter a search query!")
      //set state for error
    }
  }

  //this queries the api, and it gets called when a user does a search
  const queryApi = async (query) => {
    const result = await axios(`${baseUrl}${query}${apiKey}`)
    setData(result.data)
  }

  //if the api call has happened after a search is executed, display page component with data passed to it
  const showPage = () => {
    if (data && data.totalResults) {
      return (
        <Page
          data={data}
          showImages={showImages}
        />
      )
    }
  }



  //add conditional render for errors
  //based on a new error state

  const showError = () => {
    if (error) {
      return (
        <p className="error-message">{error}</p>
      )
    } else {
      return
    }
  }


  return (
    <div className={`App ${color}`}>


      <Route path="/">
        <Header
          search={search}
          setInputValue={setInputValue}
        />
        {showError()}
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
