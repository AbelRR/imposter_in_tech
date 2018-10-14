import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>This page should have some cool features but not sure what!!!</h1>

    <a href='https://www.linkedin.com/in/abelregalado/'> Click here to add me on LinkedIn</a>
    <br />
    <a href='https://github.com/abelrr'> or, you can click here for my Github. </a>
    <br />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
