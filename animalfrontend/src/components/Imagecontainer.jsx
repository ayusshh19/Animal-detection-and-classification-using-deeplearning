import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../pages/Home";
import "./Dropfile.css";
import { useContext } from "react";

export default function Imagecontainer(props) {
  const { setSelectedImage,setoutputurl,setoutput,clickablecard } =
  useContext(UserContext);
  const handleinputnavigate=()=>{
     if(clickablecard){
      setSelectedImage(false)
      setoutputurl(false)
      setoutput(true)
     }
  }
  return (
    <Imagedrop onClick={handleinputnavigate}>
      <img src={props.image} alt="img" srcset="" width={props.width} height={props.height} />
    </Imagedrop>
  )
}
const Imagedrop = styled.div`
width: 70%;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
padding: 1em;
// img{
//     width: 100%;
//     height: 100%;
// }
@media (max-width:990px) {
  width: 80%;
  height: 80%;
}
`