import React from 'react'
import "./Settings.scss"
import { Link } from "react-router-dom"
import Setting from "../Setting"

export default function Settings({ setColor }) {
  return (
    <aside className="Settings">

      le settings page tm
      <Link to="/">
        <button>Close</button>
      </Link>
      <Setting
        setting="Theme"
        set={setColor}
        options={["light", "dark"]}
        labels={["Light Theme", "Dark Theme"]}
      />
    </aside>
  )
}
