import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import CreateShowForm from './CreateShowForm'
import Poster from './Poster'
import MyDogs from './MyDogs'
import AddDog from './AddDog'
import EditDog from './EditDog'
import EditPoints from './EditPoints'

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createshowform" element={<CreateShowForm />} />
          {/* <Route path="/createshowevents" element={<CreateShowEvents />} /> */}
          <Route path="/poster" element={<Poster />} />
          <Route path="/mydogs" element={<MyDogs />} />
          <Route path="/dog/add" element={<AddDog />} />
          <Route
            path="/dog/:dog_id/details"
            element={<EditDog variant="details" />}
          />
          <Route path="/dog/:dog_id/points" element={<EditPoints />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
