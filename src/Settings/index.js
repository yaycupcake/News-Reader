import React from 'react'
import "./Settings.scss"
import { Link } from "react-router-dom"
import Setting from "../Setting"

export default function Settings({ setColor, setShowImages }) {
  return (
    <aside className="Settings">

      Settings
      <Link to="/">
        <button>Close</button>
      </Link>
      <Setting
        setting="Theme"
        set={setColor}
        options={["light", "dark"]}
        labels={["Light Theme", "Dark Theme"]}
      />
      <Setting
        setting="Images"
        set={setShowImages}
        options={[true, false]}
        labels={["On", "Off"]}
      />

    </aside>
  )
}
