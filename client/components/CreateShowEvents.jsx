import React, { useState } from 'react'

function CreateShowEvents() {
  const [showEvents, setShowEvents] = useState([
    {
      showEvent: 'beginner',
    },
  ])

  let handleChange = (i, e) => {
    let newShowEvent = [...showEvents]
    newShowEvent[i].showEvent = e.target.value
    setShowEvents(newShowEvent)
    console.log(e.target.value)
  }

  let addShowEvents = () => {
    setShowEvents([...showEvents, { showEvent: '' }])
  }

  let removeShowEvent = (i) => {
    let newShowEvent = [...showEvents]
    newShowEvent.splice(i, 1)
    setShowEvents(newShowEvent)
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(showEvents)
  }

  return (
    <div className="event-form">
      <h1>Add Events to Show</h1>
      <p>Add events to the show then generate a poster</p>
      <form>
        <div className="showEvents">
          {showEvents.map((input, index) => {
            return (
              <div key={index}>
                <label>Show Event</label>
                <select
                  type="text"
                  name="showEvent"
                  value={input.showEvent || ''}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="senior">Senior</option>
                  <option value="advanced">Advanced</option>
                  <option value="beginner-plate">Beginner-plate</option>
                  <option value="intermediate-plate">Intermediate-plate</option>
                  <option value="senior-plate">Senior-plate</option>
                  <option value="advanced-plate">Advanced-plate</option>
                </select>
                {index ? (
                  <button type="button" onClick={() => removeShowEvent(index)}>
                    Remove
                  </button>
                ) : null}
              </div>
            )
          })}
          <button onClick={addShowEvents} type="button">
            Add More
          </button>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateShowEvents
