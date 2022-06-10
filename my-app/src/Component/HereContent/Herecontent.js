import React,{useState} from 'react'
import styled from 'styled-components'
import DropFileInput from '../drop-file-input/DropFileInput'
import '../../assets/App.css'
import Recorder from '../Recorder/Recorder'
import Recorder2 from '../Recorder2/Recorder2'
import {MainCont,Left,Right,Img,Texter} from './Herecontentele'

const Herecontent = () => {
    const [loading, setLoad] = useState(false);
    const [ans,setans] = useState("");
    const [pic,setpic] = useState(false);
    console.log(pic);
    const onFileChange = (files) => {
        console.log(files);
    }
    let source = "./images/"+ans+".png";
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
            pic = {pic}
            setpic = {setpic}
            />
    </div>
</div>
        </Left>
        <Right>
            <Recorder2 ans = {ans}
            setans = {setans}
            pic = {pic}
            setpic = {setpic}
            />
        </Right>

        </MainCont>
        <Img pic = {pic}><img src = {source} alt =""/></Img>
        <Texter pic = {pic}>{ans.toUpperCase()}</Texter>
    </>
  )
}

export default Herecontent;