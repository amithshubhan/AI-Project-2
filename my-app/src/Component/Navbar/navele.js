import styled,{css,keyframes} from 'styled-components'

const fadeIn =  keyframes`
    0% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(0px);
    }
`
export const NavCont = styled.div`
    z-index: 10;
    background: white;
    position: fixed;
    // transition: all .1s ease-in-out;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 10px 2px 10px lightgrey;
`
export const Navinner = styled.div`
width: 100%;
height: 50px;
padding: 10px;
left: 50px;
display: flex;
flex-direction: row;
    justify-content: space-between;
`
export const Navtitle = styled.div`
display: flex;
align-items: center;
justify-content: left;
margin: 0px 20px;
img{
    width: 100px;
    height: auto;
}


`
export const Maintitle = styled.div`
padding: 20px;
font-family: 'Open Sans', sans-serif;
font-size: 30px;
font-weight: 700;
// letter-spacing: 1px;    
`
export const NavItems = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
`
export const Items = styled.div`
font-family: 'Open Sans', sans-serif;
margin:0px 10px;
width: 100px;
position: relative;
overflow: hidden;
padding:0px 10px;
font-size: 20px;
font-weight: 600;
color: #000;
border: solid black 2px;
cursor:pointer;
transition: all .4s ease-in-out;

    .acc{
        position:absolute;
        z-index: -1;
        width: 120px;
        top: 0;
        left: -130px;
        height: 100%;
        background-color: black;
        transition: 0.3s ease-in-out;
    }

&:hover{
    border: none;
  outline: none;
    transform: translateX(-5px) translateY(-5px);
    .acc{
        left: 0px;
        transition: 0.3s ease-in-out;
    }
    box-shadow: 5px 5px 0px #333;
    color: #fff;
    transition: 0.3s ease-in-out;
}
`