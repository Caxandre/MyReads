import '../template/dependencies'
import React from 'react'

import NavBar from '../template/navBar'
import Footer from '../template/footer'
import Routes from './routes'

export default props => (
  <div className="main">
    <NavBar />
    <Routes />
    <Footer />
  </div>
)
