
import React, { useEffect, useState } from 'react'
import {NavCont,Navinner,NavItems,Navtitle,Items,Maintitle} from './navele'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";


const Navbar = () => {
const [fir,setfir] = useState(false)

  return (
    <>
        <NavCont fir = {fir}>
            <Navinner>
                <Navtitle>
                    <img src='./images/Logonam1.png' alt = ''/>
                    <Maintitle>EMOSPEECH</Maintitle>
                </Navtitle>
                <NavItems>
                <Link style={{ textDecoration: 'none' }} to='/'><Items><div className="acc"></div>INFO</Items></Link>
                <Link style={{ textDecoration: 'none' }} to='/Predict'><Items><div className="acc"></div>PREDICT</Items></Link>
                <Link style={{ textDecoration: 'none' }} to='/About'><Items><div className="acc"></div>ABOUT</Items></Link>
                </NavItems>
            </Navinner>
        </NavCont>
    </>
  )
}

export default Navbar;


