import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import CreateShowForm from './CreateShowForm'
import CreateShowEvents from './CreateShowEvents'
import Poster from './Poster'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createshowform" element={<CreateShowForm />} />
          <Route path="/createshowevents" element={<CreateShowEvents />} />
          <Route path="/poster" element={<Poster />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
