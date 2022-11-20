import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { submitShow } from '../actions'
import CreateShowEvents from './CreateShowEvents'

function CreateShowForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showDetails, setShowDetails] = useState({
    host_club: '',
    location: '',
    date: '',
    setup_time: '',
    entries_by: '',
    start_time: '',
    entryA_cost: '',
    entryB_cost: '',
    cont_name: '',
    cont_email: '',
    notes1: '',
    notes2: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setShowDetails((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(submitShow(showDetails))
    setShowDetails('')

    console.log(showDetails)
    // navigate('/upcomingshows')
  }

  return (
    <>
      <div className="event-form">
        <h1>Create New Show</h1>
        <p>
          Create a new show. Fill in the details to register a flygility show.
          The next step will be adding events, then creating a poster.
        </p>
        <form>
          <div className="hosting">
            <h2>Hosting Details</h2>
            <label>Host Club Name:</label>
            <input type="text" name="host_club" onChange={handleChange} />
            <label>Location:</label>
            <input type="text" name="location" onChange={handleChange} />
            <label>Date:</label>
            <input type="date" required name="date" onChange={handleChange} />

            <label>Setup Time:</label>
            <input type="text" name="setup_time" onChange={handleChange} />
            <label>Entries by:</label>
            <input type="text" name="entries_by" onChange={handleChange} />
            <label>Start Time:</label>
            <input type="text" name="start_time" onChange={handleChange} />
          </div>

          <div className="pricing">
            <h2>Pricing</h2>
            <label>Entry Cost (SFG members):</label>
            <input
              type="number"
              min="0"
              name="entryA_cost"
              onChange={handleChange}
            />
            <label>Entry Cost (non-members):</label>
            <input
              type="number"
              min="0"
              name="entryB_cost"
              onChange={handleChange}
            />
          </div>

          <div className="eventContact">
            <h2>Contact and Notes</h2>
            <label>Contact Name:</label>
            <input type="text" name="cont_name" onChange={handleChange} />
            <label>Contact Email:</label>
            <input type="text" name="cont_email" onChange={handleChange} />
            <label>Notes 1:</label>
            <textarea name="notes1" onChange={handleChange}></textarea>
            <label>Notes 2:</label>
            <textarea name="notes2" onChange={handleChange}></textarea>
          </div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>

      <CreateShowEvents />
      <Link to={`/upcomingshows`}>
        <button>Upcoming Shows</button>
      </Link>
    </>
  )
}

export default CreateShowForm
