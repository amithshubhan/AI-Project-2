import React from 'react'
import styled,{keyframes} from 'styled-components'

const NameCard = ({span,disc,imgsrc}) => {
  return (
    <>
        <CardCont>
            
<div class="container1">
  <div class="img1" ><img class = "cat" src={imgsrc} alt=""/>  </div>
  <Texter>

  <span>"Hi my name is {span}</span>{disc}"
  </Texter>
</div>
        </CardCont>
    </>
  )
}

export default NameCard
const popup = keyframes`
    0%{
    transform: scale(0)
  }
  100%{
    transform: scale(1)
  }
`
const Texter = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    span{
        font-family: 'Pacifico', cursive;
        position: absolute;
        top: -100px;
        left: 100px;
        font-size: 50px;
    }
    
`
const CardCont = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content:center;
    align-items:center;
    background: transparent;
    
    /* border: 3px solid grey; */
  
.img1{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  /* background-color: red; */
  top: -55px;
  left: -55px;
  animation: ${popup} 0.7s;
  
}
.cat{
  border-radius: 5px;
    width: 100%;
    height: 100%;
    
  }
.container1{
    margin: 160px;
    padding: 50px;
  position: relative;
  width: 700px;
  height: 400px;
  font-size: 40px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 20px; 
/*   box-shadow: -1px -1px 10px rgba(255,255,255,.3) inset,
		2px 2px 20px rgba(0,0,0,.5); */
}

.container1:before{
    animation: ${popup} 0.4s;
  content: '';
  top: -70px;
  left: -70px;
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background: rgba(255,255,255,0.15);
  filter: blur(1px);
    box-shadow: -1px -1px 10px rgba(255,255,255,.3) inset,
		2px 2px 20px rgba(0,0,0,.5);
}


`