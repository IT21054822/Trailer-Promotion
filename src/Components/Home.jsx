import React from 'react'
import './Home.css'
import video1 from '../Assets/video-1.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="contain">
        <video className='background' autoPlay loop muted>
            <source src={video1} type='video/mp4' />
        </video>
        <div className="header">
            <h1>ADVENTURE AWAITS</h1>
        </div>
        <div className="button1">
            <button><Link style={{textDecoration:'none'}} to='https://www.youtube.com/watch?v=kcVBPvtIJDA'>Watch Trailer</Link></button>
        </div>
        <div className="button2">
            <button><Link style={{textDecoration:'none'}} to = '/Signup'>Get Started</Link></button>
        </div>
    </div>
    
  )
}

export default Home
