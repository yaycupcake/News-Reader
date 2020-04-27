import React from 'react'
import "./Settings.scss"
import { Link } from "react-router-dom"

export default function Settings() {
  return (
    <aside className="Settings">

      le settings page tm
      <Link to="/">
        <button>Close</button>
      </Link>
    </aside>
  )
}
