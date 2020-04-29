import React from 'react'
import "./Settings.scss"
import { Link } from "react-router-dom"
import Setting from "../Setting"
import Button from "../Button"

export default function Settings({ setColor, setShowImages }) {
  return (
    <aside className="Settings">

      <h2>Settings</h2>
      <Link to="/">
        <Button
          className="to-settings"
          value="Close" />
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

      <br />
      <hr />

      <p>This app is powered by <a href="https://newsapi.org/">NewsApi.org</a></p>
      <p>External link icon for news headlines is from <a href="https://fontawesome.com/license/free">FontAwesome</a></p>
      <p>App created by Janis Rancourt (Github <a href="https://github.com/yaycupcake">yaycupcake)</a></p>

    </aside>
  )
}
