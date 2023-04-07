import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../pages/Home";
import "./Dropfile.css";
import { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
export default function Imagecontainer(props) {
  const { setSelectedImage,setoutputurl,setoutput,clickablecard ,outputurl} =
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
      {outputurl?<CloseIcon className='iconclose'/>:''}
      <img src={props.image} alt="img" srcset="" width={props.width} height={props.height} />
    </Imagedrop>
  )
}
const Imagedrop = styled.div`
width: 60%;
height: 60%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
padding: 1em;
.iconclose{
  position: absolute;
  top: -1rem;
  right: -1rem;
  transform: scale(1.6);
  color: linear-gradient(90deg, #224D4F 43.75%, #000B17 100%);
  cursor: pointer;
}
// img{
//     width: 100%;
//     height: 100%;
// }
@media (max-width:990px) {
  width: 80%;
  height: 80%;
}
`