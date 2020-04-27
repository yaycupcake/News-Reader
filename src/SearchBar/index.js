import React from 'react'
import "./SearchBar.scss"

export default function SearchBar({ search, setInputValue }) {
  return (
    <div className="SearchBar">
      <input
        type="search"
        placeholder="Search"
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        onClick={search}
      >
        Go
        </button>
    </div>
  )
}
