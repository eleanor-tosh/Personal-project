import React, { useEffect } from 'react'
import { Route, Routes, BrowserRoutes as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchDogs } from '../actions'

import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import CreateShowForm from './CreateShowForm'
import Poster from './Poster'
import MyDogs from './MyDogs'
import AddDog from './AddDog'
import EditDog from './EditDog'
import EditPoints from './EditPoints'
import MyDetails from './MyDetails'
import UpcomingShows from './UpcomingShows'
import EnterShow from './EnterShow'
import Entries from './Entries'
import Clubs from './Clubs'
import Rules from './Rules'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDogs())
  }, [])

  return (
    <>
      <div className="app">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createshowform" element={<CreateShowForm />} />
          {/* <Route path="/createshowevents" element={<CreateShowEvents />} /> */}

          <Route path="/mydogs" element={<MyDogs />} />
          <Route path="/mydetails" element={<MyDetails />} />
          <Route path="/upcomingshows" element={<UpcomingShows />} />
          <Route path="/entershow" element={<EnterShow />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/rules" element={<Rules />} />

          <Route path="/dog/add" element={<AddDog />} />

          <Route path="/poster/:show_id" element={<Poster />} />
          <Route path="/dog/:dog_id/details" element={<EditDog />} />
          <Route path="/dog/:dog_id/points" element={<EditPoints />} />
        </Routes>
      </div>
    </>
  )
}

export default App
