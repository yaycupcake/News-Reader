import React from 'react'

export default function Setting({ setting, set, options, labels }) {
  return (
    <div className="Setting">
      <h3>{setting}</h3>

      {options.map((option, index) =>

        <button
          onClick={() => set(option)}
          key={index}
        >
          {labels[index]}
        </button>

      )
      }
    </div>
  )
}
