import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const Footer = () => {
  return (
    <>
        <Fcont>
            <Ftitle>
                @2022 AI Project frontend made by Amith.
            </Ftitle>
            
        </Fcont>
    </>
  )
}

export default Footer

const Fcont = styled.div`
    // position: absolute;
    background: black;
    position: relative;
    width: 100%;
    bottom: 0px;
    display: flex;
    height: 100px;
    padding: 30px;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow:visible;

`
const Ftitle = styled.div`
font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: 400;
    font-size: 20px;
    padding: 20px;
    margin: 20px;

`
// @keyframes {
//     0
// }

