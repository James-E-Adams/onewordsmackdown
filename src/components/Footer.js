import React from "react"
import { SocialIcon } from "react-social-icons"

import Timer from "./Timer"

const Footer = ({ timers, ...props }) => (
  <div style={{ marginBottom: 20 }}>
    {timers && <Timer timers={timers} {...props} />}
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
      by{" "}
      <a style={{ color: "lightblue" }} href="https://james.now.sh">
        {" "}
        James Adams{" "}
      </a>
    </div>
    <div style={{ marginTop: 10, textDecoration: "italic", fontSize: 12 }}>
      Best played full screen.
    </div>
  </div>
)

export default Footer
