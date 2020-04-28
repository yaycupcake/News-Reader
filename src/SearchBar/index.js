import React from 'react'
import "./SearchBar.scss"
import Button from "../Button"

export default function SearchBar({ search, setInputValue }) {
  return (
    <div className="SearchBar">
      <input
        type="search"
        placeholder="Search"
        onChange={e => setInputValue(e.target.value)}
      />
      <Button
        onClick={search}
        value="Go"
      />
    </div>
  )
}
