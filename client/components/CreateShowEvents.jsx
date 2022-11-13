import React, { useState } from 'react'

function CreateShowEvents() {
  const [showEvents, setShowEvents] = useState([
    {
      showEvent: '',
    },
  ])

  let handleChange = (i, e) => {
    let newShowEvent = [...showEvents]
    newShowEvent[i][e.target.showEvent] = e.target.value
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
                <input
                  type="text"
                  name="showEvent"
                  value={input.showEvent || ''}
                  onChange={(e) => handleChange(index, e)}
                />
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
