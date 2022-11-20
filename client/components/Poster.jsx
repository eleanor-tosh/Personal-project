import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function Poster() {
  const dispatch = useDispatch
  const { show_id } = useParams()
  const displayShow = useSelector((state) => state.showDetails)

  const selectedShow = displayShow.find((show) => show_id == show.show_id)
  if (!selectedShow) {
    return <div></div>
  }

  const date = new Date(selectedShow.date).toDateString()

  return (
    <div>
      <h1>Show Poster</h1>
      {selectedShow && (
        <section className="poster">
          <div className="poster-content">
            <h1 className="poster-title">Flygility Tournament</h1>
            <img
              src={`/images/SouthernFlygility.png`}
              alt="club logo"
              className="poster-image"
            />
            <div className="poster-host">
              <h2>Hosted by {selectedShow.host_club}</h2>
              <h2>{selectedShow.location}</h2>
              <h2>{date}</h2>
            </div>
            <p>
              Cost: ${selectedShow.entryA_cost} per class for club members, $
              {selectedShow.entryB_cost} for non members
            </p>
            <div className="poster-times">
              <h2 className="poster-start">
                Setup time: {selectedShow.setup_time}
              </h2>
              <h2>Entries by {selectedShow.entries_by}</h2>
              <h2>Start: {selectedShow.start_time}</h2>
              <br />
            </div>
            <div className="poster-events">
              <h1 className="poster-event-title">Events:</h1>
              <p>(Order of Events to be decided on the day)</p>
              <br />
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Intermediate-plate</p>
              <p>Senior</p>
              <p>Advanced</p>
              <br />
            </div>
            <div className="poster-notes">
              <p>{selectedShow.notes1}</p>
              <p>{selectedShow.notes2}</p>
            </div>
            <p>
              Contact: {selectedShow.cont_name}, {selectedShow.cont_email}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}

export default Poster

// import React, { useState } from 'react'

// function Poster() {
//   return (
//     <section className="poster">
//       <div className="poster-content">
//         <h1 className="poster-title">Flygility Tournament</h1>
//         <img
//           src={`/images/SouthernFlygility.png`}
//           alt="club logo"
//           className="poster-image"
//         />
//         <div className="poster-host">
//           <h2>Hosted by the Southern Flygility Group</h2>
//           <h2>Forrester Park, Normandy, Dunedin</h2>
//           <h2>Monday 8th February 2023</h2>
//         </div>
//         <p>Cost: $3 per class for club members, $4 for non members</p>
//         <div className="poster-times">
//           <h2 className="poster-start">Setup time: 9:00am</h2>
//           <h2>Entries by 9:30am</h2>
//           <h2>Start: 10:00am</h2>
//           <br />
//         </div>
//         <div className="poster-events">
//           <h1 className="poster-event-title">Events:</h1>
//           <p>(Order of Events to be decided on the day)</p>
//           <br />
//           <p>Beginner</p>
//           <p>Intermediate</p>
//           <p>Intermediate-plate</p>
//           <p>Senior</p>
//           <p>Advanced</p>
//           <br />
//         </div>
//         <div className="poster-notes">
//           <p>Intermediate-plate dependent on entry numbers/interest</p>
//           <p>Shared lunch, all welcome, please bring a plate</p>
//         </div>
//         <p>Contact: Frank Flyer, frank.flyer@email.com</p>
//       </div>
//     </section>
//   )
// }

// export default Poster
