import React from 'react'
import './tit.css'

const Titler = ({title}) => {
  return (
      <>
    <div className="container">
        {/* <div class="wrapwrap"> */}

	<div className = "wrapper">
		<h1> {title}</h1>
        </div>
        {/* </div> */}
  </div>
  </>
  )
}

export default Titler