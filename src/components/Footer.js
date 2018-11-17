import React from "react"
import { SocialIcon } from "react-social-icons"

import Timer from "./Timer"

const Footer = ({ timers }) => (
  <div style={{ marginBottom: 20 }}>
    <Timer timers={timers} />
    <div>
      <SocialIcon
        style={{ marginRight: 10 }}
        url="https://github.com/James-E-Adams"
      />
      <SocialIcon
        style={{ marginRight: 10 }}
        url="https://twitter.com/jamesadams0"
      />
      <SocialIcon url="https://medium.com/@jamesadams0" />
    </div>
    <div style={{ marginTop: 10, textDecoration: "italic", fontSize: 17 }}>
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      on a lazy Saturday morning in November...
    </div>
  </div>
)

export default Footer
