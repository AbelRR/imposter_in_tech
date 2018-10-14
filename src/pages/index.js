import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World and Free Code Camp!!</h1>

    <p>This is my first JAM Stack Application.</p>
    <p>I cannot be more excited to develop using amazing API's with great people.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
