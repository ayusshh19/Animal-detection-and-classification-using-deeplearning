import React from 'react'
import styled from 'styled-components'
import { UserContext } from "../pages/Home";
import { useContext } from "react";
export default function Exampleimages(props) {
  const { clickablecard,setclickablecard } =
  useContext(UserContext);
  const hancleclickcards=()=>{
    if(clickablecard){
      setclickablecard(false)
    props.setoutput(props.eximg)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }
  }
  return (
    <Exampleset onClick={hancleclickcards}>
      {clickablecard?'':(
        <div className='blurbag'>
          <h4>Please wait previous image in processing</h4>
        </div>
      )}
      <img src={props.eximg} alt="" srcset="" />
    </Exampleset>
  )
}
const Exampleset = styled.div`
    width: 350px;
    height: 250px;
    display: flex;
    justify-content: center;
    position:relative;
    align-items: center;
    @media (max-width:990px) {
      // width: 150px;
      margin: 0.3rem;
    }
    .blurbag{
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    width:  100%;
    height:100%;
    background:rgba(255,255,255,0.2)
    }
    .blurbag h4{
      font-weight:bold;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`