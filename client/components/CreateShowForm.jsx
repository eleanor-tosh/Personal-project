import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'

function CreateShowForm() {
  // const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState([
    {
      club: '',
      location: '',
      date: '',
      day: '',
      startTime: '',
      entryA: '',
      entryB: '',
      contName: '',
      contEmail: '',
      notes: '',
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
    <div className="event-form">
      <h1>Create New Show</h1>
      <p>
        Create a new show. Fill in the details to register a flygility show. The
        next step will be adding events, then creating a poster.
      </p>
      <form>
        <div className="hosting">
          <h2>Hosting Details</h2>
          <label>Host Club Name:</label>
          <input type="text" required name="club" onChange={handleChange} />
          <label>Location:</label>
          <input type="text" required name="location" onChange={handleChange} />
          <label>Date:</label>
          <input type="text" required name="date" onChange={handleChange} />
          <label>Day:</label>
          <input type="text" required name="day" onChange={handleChange} />
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
          <input type="text" required name="contName" onChange={handleChange} />
          <label>Contact Email:</label>
          <input
            type="text"
            required
            name="contEmail"
            onChange={handleChange}
          />
          <label>Notes:</label>
          <textarea name="notes" onChange={handleChange}></textarea>
        </div>
      </form>
      <div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  )
}

export default CreateShowForm
