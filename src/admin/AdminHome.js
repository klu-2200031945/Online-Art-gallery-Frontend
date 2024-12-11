import React from 'react'
import "./adminhome.css"
import video from "../Components/video-1.mp4"

export default function AdminHome() {
  return (
    <div className='adminhome'>
      <video src={video} autoPlay loop muted />
      <div className='intro-container'>
      <h1>Welcome Admin!</h1>
    </div>
    </div>
  )
}
