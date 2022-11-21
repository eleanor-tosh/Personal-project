import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchShows, removeShow } from '../actions'

function UpcomingShows() {
  const displayShows = useSelector((state) => state.showDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShows())
  }, [])

  function handleDelete(event, show) {
    event.preventDefault()
    dispatch(removeShow(show))
  }

  return (
    <div>
      <h1>Upcoming Shows</h1>

      {displayShows?.map((show) => {
        const date = new Date(show.date).toDateString()
        return (
          <div className="mydetails" key={show.show_id}>
            <h2>Hosted By: {show.host_club}</h2>
            <h2>Location {show.location}</h2>
            <p>Date: {date}</p>
            <Link to={`/poster/${show.show_id}`}>
              <button>Tournament Poster</button>
            </Link>
            <Link to={`/poster`}>
              <button>Edit Details</button>
            </Link>
            <Link to={`/entershow`}>
              <button>Enter Show</button>
            </Link>
            <Link to={`/poster`}>
              <button>See Entries</button>
            </Link>

            <button onClick={(event) => handleDelete(event, show.show_id)}>
              Delete Show
            </button>
          </div>
        )
      })}
      <Link to={`/createshowform`}>
        <button className="wide-button">Create Show</button>
      </Link>
    </div>
  )
}

export default UpcomingShows
