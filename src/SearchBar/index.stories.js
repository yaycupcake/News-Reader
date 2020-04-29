import React from "react"
import { storiesOf } from "@storybook/react"
import SearchBar from "./index"

storiesOf('SearchBar', module)
  .add('plain SearchBar', () =>
    <SearchBar />
  )

