import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World and Free Code Camp!!</h1>

    <p>My first JAM Stack Application.</p>

    <br />
    <Link to="/user-page/"> User Page</Link>
  </Layout>
)

export default IndexPage
