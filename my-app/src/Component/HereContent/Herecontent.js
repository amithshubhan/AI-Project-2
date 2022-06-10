import React,{useState} from 'react'
import styled from 'styled-components'
import DropFileInput from '../drop-file-input/DropFileInput'
import '../../assets/App.css'
import Recorder from '../Recorder/Recorder'
import Recorder2 from '../Recorder2/Recorder2'

const Herecontent = () => {
    const [loading, setLoad] = useState(false);
    const [ans,setans] = useState("");

    const onFileChange = (files) => {
        console.log(files);
    }
  return (
    <>
    <MainCont>
    <Left>
    <div className="now"/>
    <div className="herebody">

<div className="box">
        <h2 className="header">
            Drop audio files for prediction
        </h2>
        <DropFileInput
            setLoad = {setLoad}
            onFileChange={(files) => onFileChange(files)}
            ans = {ans}
            setans = {setans}
            />
    </div>
</div>
        </Left>
        <Right>
            <Recorder2 ans = {ans}
            setans = {setans}/>
        </Right>

        </MainCont>
        <Texter>{ans}</Texter>
    </>
  )
}

export default Herecontent

const MainCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // height: auto;
    /* padding-top: 140px; */
    justify-content: center;
    align-items: center;

`
const Texter = styled.div`
display: flex;
justify-content:center ;
align-items: center;
font-size: 50px;

`



const Left = styled.div`
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
const Right = styled.div`
    padding: 100px;
`