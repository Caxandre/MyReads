import '../template/dependencies'
import React from 'react'

import NavBar from '../template/layout/navBar'
import Footer from '../template/layout/footer'
import Routes from './routes'

export default props => (
  <div className="main">
    <NavBar />
    <Routes />
    <Footer />
  </div>
)
