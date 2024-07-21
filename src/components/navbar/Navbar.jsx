import React from 'react'
import "./navbar.scss"

const Home = () => {

  return (
    <div className='home'>
        <div className="logo">
          Furkan Durak -> FD.dev
        </div>
        <div className="menu">
          <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li> 
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Home