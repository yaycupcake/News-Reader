import React from 'react'

export default function SearchBar({ search, setInputValue }) {
  return (
    <div>
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
