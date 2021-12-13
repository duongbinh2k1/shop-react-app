import React from 'react'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import Info from '../../components/Info/Info'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container" style={{marginTop: '120px'}}>
          <Info />
          <GetInTouch />
        </div>
      </div>
    </>
  )
}

export default Contact
