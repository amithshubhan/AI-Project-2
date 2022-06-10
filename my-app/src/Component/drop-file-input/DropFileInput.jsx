import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import './drop-file-input.css';

import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';
// import { darkScrollbar } from '@mui/material';

const DropFileInput = props => {

    const wrapperRef = useRef(null);
    

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        console.log((e.target.files[0].name))
        
        // console.log('here file')
        // e.target.files.map((file) => {
        //     console.log(file)
        //     return file
        // })
        
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            // console.log(fileList)
            props.onFileChange(updatedList);
        }
        // console.log(fileList[0].name);
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
    const player = async() => {
        // let song = new Audio(fileList[0]);
       const file = fileList[0];
        const response  = await fetch("/upload",{
            method: 'POST',
            header:{
                'Content-Type' : 'multipart/form-data'
            },
            body: file
        })

        
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setLoad(true);
        props.setpic(false);
        const data = new FormData();
        data.append('file', fileList[0])
        data.append('filename', fileList[0].name);
        fetch('http://127.0.0.1:5000/upload',{
            method: 'POST',
            body:data
        }).then( (response) => response.json()).then(function(message) {
            props.setLoad(false);
            props.setans(message.message);
            // console.log(props.pic);
            props.setpic(true);
            // console.log(props.pic);
            return console.log(message.message)});
        // console.log(fileList)
        // console.log('file things are ',fileList[0])
    }

    return (
        <>
        <form  onSubmit={handleSubmit}>

            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" name="file" onChange={onFileDrop} accept="audio/*"/>
                
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
            <Bottomer><Newbutton ><div className='acc'/><input type = "submit" value="" />SUBMIT</Newbutton></Bottomer>
            </form>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;

const Bottomer = styled.div`
cursor:pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 20px 0;
    button{
        // width:100px;
        border:none;
        margin: 20px;
    }

`

const Newbutton = styled.div`
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
        height: 400px;
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