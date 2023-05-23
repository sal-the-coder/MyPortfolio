import React from 'react'
import andrew from './Images/andrew.jpg'

function Home() {
  return (
    <div id = 'home'>
        <img src={andrew} alt='my picture' height="200px" width ="200px"/>
        <h3>Hi There, I am Andrew</h3>
        <h4>A Software Developer</h4>
        <div>
            <h1>Programming Languages</h1>
            <ul>
                <li><a href='#'>Javascript</a></li>
                <li><a href='#'>HTML</a></li>
                <li><a href='#'>CSS</a></li>
            </ul>

        </div>
        
    </div>
  )
}

export default Home