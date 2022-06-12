import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const InfoBuild = ({maindata,cirdata}) => {
  return (
    <>
        <InfoCont class="parent">
{maindata}
  <Circle class="child">
 {cirdata}
  </Circle>
</InfoCont>
    </>
  )
}

export default InfoBuild

const popup = keyframes`
    0%{
    transform: scale(0)
  }
  60%{
    transform: scale(1)
  }
  80%{
    transform: scale(0.8)
  }
  100%{
    transform: scale(1)
  }
`

const InfoCont = styled.div`
    padding:30px;
    width: 500px;
  border-radius: 10px;
  height: 300px;
  justify-content: center;
  display: flex;
  background: white;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  position: relative;
  border: 6px solid #000;
  margin: 150px;
`
const Circle = styled.div`
animation: ${popup} 1s forwards;
    position: absolute;
  width: 250px;
  z-index: -1;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: black;
  top: -50%;
  left: -30%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 300;
`
