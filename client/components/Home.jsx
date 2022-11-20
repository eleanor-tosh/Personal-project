import React from 'react'

function Home() {
  return (
    <div className="main-content">
      <h2>Welcome to the Flygility Tournament App</h2>
      <p>
        Flygility is a dog sport that mixes elements of agility and flyball.
      </p>
      <p>
        As in flyball the dog is sent to fetch a ball from a flyball box and
        returns the ball to the handler.
      </p>
      <p>
        Courses can be longer than in flyball, 30m from start line to the box,
        and use agility obstacles. In New Zealand, the sport is administered by
        NZ Flygility Dog Association.
      </p>
      <p>
        Use this app to create tournaments, tournament posters, track your dogs
        details and eventually create tournament draws and export results.
      </p>
      <img className="home-image" src={`/images/flygility4.jpg`} />
      <img className="home-image" src={`/images/flygility1.jpg`} />
      <img className="home-image" src={`/images/flygility6.jpg`} />
    </div>
  )
}

export default Home
