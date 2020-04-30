import React from 'react'
import SiteTitle from "../SiteTitle"
import SearchBar from "../SearchBar"
import "./Header.scss"

export default function Header({ search, setInputValue, handleEnter }) {
  return (
    <header>
      <SiteTitle />
      <SearchBar
        search={search}
        setInputValue={setInputValue}
        handleEnter={handleEnter}
      />
    </header>
  )
}
