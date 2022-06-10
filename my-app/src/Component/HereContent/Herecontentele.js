import styled from 'styled-components';
export const MainCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // height: auto;
    /* padding-top: 140px; */
    justify-content: center;
    align-items: center;

`
export const Img = styled.div`
    width: 300px;
    height: 300px;
    background: black;
    border-radius:10px;
    padding: 20px;
    margin: 30px;
    display: ${({pic}) => (pic ? 'flex' : 'none')};
    justify-content:center ;
    align-items:center ;
    img{
        width: 250px;
        height: 250px;
        z-index:2;
    }

`
export const Texter = styled.div`
display: ${({pic}) => (pic ? 'flex' : 'none')};
width: fit-content;
background:black;
color: white;
padding: 30px;
border-radius: 10px; 
justify-content:center ;
align-items: center;
font-size: 50px;

`



export const Left = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 100px;
    
    .now{
        position: absolute;
        right: -50px;
        z-index: 1;
        height: 500px;
        width: 1px;
        background-color: black;
        
    }
    .herebody{
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius:10px ;
        /* border: 3px solid black; */
    }
    .header{
        padding: 30px 10px;

    }
`
export const Right = styled.div`
    padding: 100px;
`