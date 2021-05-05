import React, { useState } from 'react'
import { Tooltip, withStyles } from "@material-ui/core"
import "./contact.css"

const CutomTooltip = withStyles(() => ({
  tooltip: {
    fontSize: 16,
  },
}))(Tooltip);

export default function Contact() {
  const [copy, setCopy] = useState("Copy")
  const emailCopied = () => {
    navigator.clipboard.writeText("renteriamp96@gmail.com")
    setCopy("Copied")
    setTimeout(() => { setCopy("Copy") }, 1000)
  }

  return (
    <section class="contact">
      <p>Please get in touch with me for professional opportunities.</p>
      <CutomTooltip title={copy} arrow>
        <button class="email" onClick={emailCopied}>renteriamp96@gmail.com</button>
      </CutomTooltip>
    </section>

  )
}

