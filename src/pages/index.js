import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World and Free Code Camp!!</h1>

    <p>My first JAM Stack Application.</p>

    <p>
      I cannot be more excited to develop using amazing API's with great people.
    </p>

    <Link to="/page-2/"> CLICK OVER HERE!!! 🤝</Link>
  </Layout>
)

export default IndexPage
