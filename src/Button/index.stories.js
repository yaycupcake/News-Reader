import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./index"


storiesOf('Button', module)
  .add('Test Button', () =>
    <Button
      className="test-class-1"
      onClick={function (e) { alert("hi") }}
      value="Test button!"
    />
  )
  .add('Does Nothing Button', () =>
    <Button
      value="nothing happens"
    />
  )

