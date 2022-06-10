import React from 'react'
import '../assets/App.css'
import styled,{keyframes} from 'styled-components'
import DropFileInput from '../Component/drop-file-input/DropFileInput';
import Navbar from '../Component/Navbar/Navbar';
import Herecontent from '../Component/HereContent/Herecontent';
import Titler from '../Component/Titler/title';
import Fade from 'react-reveal/Fade';
import Footer from '../Component/Footer/Footer';
const Predict = () => {
    
    const title = "PREDICTOR"

    return (
    
    <>
    <Navbar/>
    <Titler title={title}/>
    <Cont>
    <Herecontent/>
    </Cont>
    <Footer/>
    </>
  )
}

export default Predict
const wave = keyframes`
  from {
      transform: translateX(-50%) skew(0, -10deg);
  }
  to {
      transform: translateX(-30%) skew(10deg, 0);
      -webkit-transform: translateX(-30%) skew(10deg, 0);
      -moz-transform: translateX(-30%) skew(10deg, 0);
      -ms-transform: translateX(-30%) skew(10deg, 0);
      -o-transform: translateX(-30%) skew(10deg, 0);
}
`
const Cont = styled.div`
  min-height: 55vh;
  margin: 200px;
  flex-direction:column ;
  justify-content:center ;
  align-items:center ;
  position: relative;
  display:flex;
  &:before {
  content: "";
  position: fixed;
  width: 300%;
  height: 100%;
  top: 45%;
  left: 50%;
  background-color: #666;
  /* background-color: #0075ff; */
  border-radius: 50%;
  transform: translateX(-50%) skew(0, -10deg);
  animation: ${wave} 7s ease-in-out infinite alternate;
  -webkit-animation: ${wave} 7s ease-in-out infinite alternate;
  z-index: -1;
}
`