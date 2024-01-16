import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Implementation Developer</title>
        <meta property="og:title" content="Dynamic Implementation Developer" />
      </Helmet>
    </div>
  )
}

export default Home
