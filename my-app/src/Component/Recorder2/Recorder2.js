import React  from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import styled, {keyframes} from 'styled-components';
import {BsFillMicFill, BsFillSquareFill} from "react-icons/bs"

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
let propn = null;
let file = null;
const handleSubmit = () => {
    const data = new FormData();
    data.append('file', file)
    data.append('filename', file.name);
    fetch('http://127.0.0.1:5000/upload',{
        method: 'POST',
        body:data
    }).then( (response) => response.json()).then(function(message) {
      console.log(typeof(message.message));
      propn.setans(message.message);
      propn.setpic(true);
        return console.log(message.message)});
    // console.log(fileList)
    // console.log('file things are ',fileList[0])
}
class Recorder2 extends React.Component {
  // let nowprops = null;
  constructor(props){
    super(props);
    console.log("in recorder" + {props})
    propn = this.props;
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  
  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
            file = new File(buffer, 'audio1.mp3', {
            type: blob.type,
            lastModified: Date.now()
          });
          console.log(file);
          // handleSubmit();
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <RecorCont>
        <Mic>
          <Btns>
          <button id="rec" onClick={this.start} disabled={this.state.isRecording}><Recbut> <div className='acc'/><BsFillMicFill/></Recbut></button>
          <button id="stop" onClick={this.stop} disabled={!this.state.isRecording}><Recbut><div className='acc'/><BsFillSquareFill/></Recbut></button>
          </Btns>
          <audio src={this.state.blobURL} controls="controls" />
          <Bottomer><Newbutton><div className='acc'/><input onClick={handleSubmit} />SUBMIT</Newbutton></Bottomer>
        </Mic>
      </RecorCont>
    );
  }
}

export default Recorder2;
const Dropy = keyframes`
 0% { height: 0px; width: 0px; }
 100% { height: 90px; width: 90px; color:black;background: white; }
`
const RecorCont = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    

`
const Droper = styled.div`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background: white;
`
const Btns = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`
const Recbut = styled.div`
  width:90px;
  position: relative;
  height: 90px;
  display: flex;
  padding: 50px;
  margin: 50px;
  font-size: 5rem;
  justify-content: center ;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background: black;
  border: 7px solid #000;

  color: white;
  transition: 0.3s ease-in-out;

  /* &:hover{
    transform: scale(1.12);
    color: red;
    cursor: pointer;
  } */
  .acc{
        position:absolute;
        z-index: -1;
        width: 100% ;
        top: 0;
        transform: scale(0);
        left: 0;
        border-radius: 50% ;
        transform-origin: center ;
        height: 100%;
        background-color: red;
        transition: 0.3s ease-in-out;
    }

&:hover{
  border: 7px solid #000;
  outline: none;
  background-color: transparent ;
  color: black;
    .acc{
      transform: scale(1) ;
    }
    transition: 0.3s ease-in-out;
}
`
const Stpbtn = styled.div`
  width:90px;
  height: 90px;
  display: flex;
  padding: 50px;
  margin: 50px;
  justify-content: center ;
  align-items: center;
  border-radius: 50%;
  background: black;
  font-size: 30px;
  color: white;
  transition: 0.3s ease-in-out;
  &:hover{
    transform: scale(1.12);
    color: red;
    cursor: pointer;
  }
`
const Mic = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    #rec{
        border: none;
        background: transparent;
    }
    #stop{
      border: none;
        background: transparent;
    }
    audio{
      margin-left: 25%;
      box-shadow: 5px 5px 6px black;
      border-radius: 20px;
    }

`
const Bottomer = styled.div`
  margin: 20px;
cursor:pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 20px;
    button{
        /* // width:100px; */
        border:none;
        margin: 20px;
    }

`

const Newbutton = styled.div`
margin: 20px;
cursor: pointer;
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
input{
    cursor: pointer;
    text-decoration: none;
    outline: none;
    box-shadow: none;
    border: none;
    width: 110px;
    left: -10px;
    position: absolute;
    background: transparent;
    height: 40px;

}
    .acc{
        position:absolute;
        z-index: -1;
        width: 120px;
        top: 0;
        left: -130px;
        height: 120px;
        
        background-color: black;
        transition: 0.3s ease-in-out;
    }

&:hover,&:focus{
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