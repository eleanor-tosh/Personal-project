import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreateShowEvents from './CreateShowEvents'

function CreateShowForm() {
  // const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState([
    {
      club: '',
      location: '',
      date: '',
      setupTime: '',
      entriesTime: '',
      startTime: '',
      entryA: '',
      entryB: '',
      contName: '',
      contEmail: '',
      notes1: '',
      notes2: '',
    },
  ])

  const handleChange = (event) => {
    const { name, value } = event.target
    setShowDetails((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(showDetails)
    // navigate('/home')
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
            <input type="text" required name="club" onChange={handleChange} />
            <label>Location:</label>
            <input
              type="text"
              required
              name="location"
              onChange={handleChange}
            />
            <label>Date:</label>
            <input type="text" required name="date" onChange={handleChange} />

            <label>Setup Time:</label>
            <input
              type="text"
              required
              name="setupTime"
              onChange={handleChange}
            />
            <label>Entries by:</label>
            <input
              type="text"
              required
              name="entriesTime"
              onChange={handleChange}
            />
            <label>Start Time:</label>
            <input
              type="text"
              required
              name="startTime"
              onChange={handleChange}
            />
          </div>

          <div className="pricing">
            <h2>Pricing</h2>
            <label>Entry Cost (SFG members):</label>
            <input
              type="number"
              min="0"
              required
              name="entryA"
              onChange={handleChange}
            />
            <label>Entry Cost (non-members):</label>
            <input
              type="number"
              min="0"
              required
              name="entryB"
              onChange={handleChange}
            />
          </div>

          <div className="eventContact">
            <h2>Contact and Notes</h2>
            <label>Contact Name:</label>
            <input
              type="text"
              required
              name="contName"
              onChange={handleChange}
            />
            <label>Contact Email:</label>
            <input
              type="text"
              required
              name="contEmail"
              onChange={handleChange}
            />
            <label>Notes 1:</label>
            <textarea name="notes1" onChange={handleChange}></textarea>
            <label>Notes 2:</label>
            <textarea name="notes2" onChange={handleChange}></textarea>
          </div>
        </form>
        <div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </div>
      <CreateShowEvents />
      <Link to={`/poster`}>
        <button>Make Poster</button>
      </Link>
    </>
  )
}

export default CreateShowForm
