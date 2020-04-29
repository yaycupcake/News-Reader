import React from 'react'
import Button from "../Button"
import "./Setting.scss"

export default function Setting({ setting, set, options, labels }) {
  return (
    <div className="Setting">
      <h3>{setting}</h3>

      {options.map((option, index) =>

        <Button
          onClick={() => set(option)}
          key={index}
          value={labels[index]}
        />

      )
      }
    </div>
  )
}
