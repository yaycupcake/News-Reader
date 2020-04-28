import React from 'react'
import "./Button.scss"

export default function Button({ value, onClick, className }) {
  return (
    <button
      className={`Button ${className ? className : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
