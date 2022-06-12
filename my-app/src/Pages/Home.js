import React,{useState,useEffect} from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Titler from '../Component/Titler/title'
import Fade from 'react-reveal/Fade';
import Footer from '../Component/Footer/Footer';
import InfoBuild from '../Component/InfoBuild/InfoBuild';
import styled,{keyframes} from 'styled-components';
const Home = () => {
  const title = "INFORMATION";
  const firstsqtit = "WHAT?";
  const firstsqinfo = "We have developed an Deep Learning model which takes in an audio input and finds out what emotion the person is going through." 
  const secsqtit = "WHY?";
  const secsqinfo = "To majorly help health experts to decide when patient needs medicine, access their emotional response in clinical trials or to help physicians in deciding how to best triage their patients."
  const thisqtit = "HOW?";
  const thisqinfo = "We have used CNN algorithm to train the dataset giving rise to 92% of accuracy against the test data."
  return (
    <>
      <Navbar/>
      <Titler title={title}/>
      <Cont className="page">
      <InfoBuild maindata={firstsqinfo} cirdata = {firstsqtit}/>
      <InfoBuild maindata={secsqinfo} cirdata = { secsqtit}/>
      <InfoBuild maindata={thisqinfo} cirdata = {thisqtit}/>
      <Box></Box>
      <Box1></Box1>
      {/* <Box2></Box2> */}
      </Cont>
      
      <Footer/>
   </>
  )
}

export default Home

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
  min-height: 100vh;
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

// const Square = styled.div`
//   height:300px;
//   width: 300px;
//   overflow: hidden;
//   position: absolute;
//   border-radius: 25px;
//   background-color: black;
//   left: 80%;
//   bottom: 0%;

// `

const Rotator = keyframes`
 0% {  transform: rotate(0deg) }
 100% {  transform: rotate(-180deg) }
`


const RotatorY = keyframes`
 0% {  transform: rotate(0deg) ; }
 50% { transform:  rotate(90deg) ;}
 100% {  transform: rotate(180deg) ; }
`


const Box = styled.div`
    height:400px;
  width: 400px;
  overflow: hidden;
  position: absolute;
  border-radius: 25px;
  background-color: black;
    transform:translateY(-120px);
    animation: ${Rotator} 4s linear infinite;
    /* transform:translateX(-100px); */
    left: 80%;
    
`
const Box1 = styled.div`
    height:300px;
  width: 300px;
  overflow: hidden;
  position: absolute;
  border-radius: 25px;
  background-color: black;
    /* transform:translateX(1200px); */
    animation: ${RotatorY} 4s linear infinite;
    /* transform:translateX(-100px); */
    left: 5%;
    top: 10%;

    
`
const Box2 = styled.div`
    height:200px;
  width: 200px;
  overflow: hidden;
  position: absolute;
  border-radius: 25px;
  background-color: black;
    transform:translateY(-120px);
    animation: ${Rotator} 2s linear infinite;
    /* transform:translateX(-100px); */
    left: 80%;
    
`