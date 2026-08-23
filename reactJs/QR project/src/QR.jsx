import React from 'react'
import logo from './assets/image-qr-code.png'
const QR = () => {
  return (
    <div className="container">
      <div className="Content">
        <img src={logo} alt="" />
        <p className='p1'>Improve your front-end skills by building projects</p>
        <p className='p2'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QR
