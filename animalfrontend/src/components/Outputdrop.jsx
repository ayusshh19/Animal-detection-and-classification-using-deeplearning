import React from 'react'
import styled from 'styled-components'
import { UserContext } from "../App";
import { useContext } from "react";
import Imagecontainer from "./Imagecontainer";
import Loading from './Loading';
export default function Outputdrop() {
    const {outputurl } =
    useContext(UserContext);
  return (
    <Outputcontainer>
        {
            outputurl?<Imagecontainer image={outputurl} />:<Loading />
        }
    </Outputcontainer>
  )
}

const Outputcontainer=styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`