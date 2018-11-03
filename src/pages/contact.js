import React from 'react'
import { Link } from 'gatsby'

const Contact = ({ siteTitle }) => (
  <div>
    <h1>Contact Us</h1>
    <div>
      <form method="POST" action="https://formspree.io/formspree@vikramraja.me">
        <input type="email" name="email" placeholder="Your email" style={{display: 'block'}}/>
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit" style={{display: 'block'}}>Send</button>
      </form>
    </div>
  </div>
)

export default Contact
