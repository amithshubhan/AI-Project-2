import React,{useState,useEffect} from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Titler from '../Component/Titler/title'
import Fade from 'react-reveal/Fade';
import Footer from '../Component/Footer/Footer';
import NameCard from '../Component/NameCards/NameCard';
import styled,{keyframes} from 'styled-components';
import { BsImages } from 'react-icons/bs';
const About = () => {
  const title = "ABOUT";
  const span1 = "Amith";
  const span2 = "Bhuvan";
  const span3 = "Shashank";
  const disc1 = "I am a web developer primarily working on MERN stack .My role to the project has been to make the front end and connection to backend through flask to make the whole website";
  const disc2 = "I am into backend development and deep learning. My role in the project was developing CNN model for the dataset.";
  const disc3 = "I am into Machine Learning. My role in the project was dataset searching and data processing that takes MFCC of audio as input increasing accuracy of the model.";
  return (
    <>
      <Navbar/>
      <Titler title={title}/>
      <Cont>
      <NameCard span = {span1} disc={disc1} imgsrc = {"./images/amithemote.png"}/>
      <NameCard span = {span3} disc={disc3} imgsrc = {"./images/shashankemote.png"}/>
      <NameCard span = {span2} disc={disc2} imgsrc = {"./images/bhuvanemote.png"}/>
      </Cont>
      <Footer/>
   </>
  )
}

export default About;
// const Cont = styled.div`
//   display: flex;
//   justify-content:center ;
//   align-items:center ;
//   width: 100%;
//   min-height: 100vh; 
//   flex-direction:column ;
// `
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