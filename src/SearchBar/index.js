import React from 'react'
import "./SearchBar.scss"
import Button from "../Button"

export default function SearchBar({ search, setInputValue, handleEnter }) {
  return (
    <div className="SearchBar">
      <input
        type="search"
        placeholder="Search"
        onChange={e => setInputValue(e.target.value)}
        onKeyUp={handleEnter}
      />
      <Button
        onClick={search}
        value="Go"
      />
    </div>
  )
}
