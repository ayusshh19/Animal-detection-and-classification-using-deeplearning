import React from 'react'
import styled from 'styled-components'

export default function Cardbox(props) {
  return (
    <Cardboxcontent  data-aos="zoom-in"  >
        {props.data}
    </Cardboxcontent>
  )
}
const Cardboxcontent=styled.div`
    min-width: 125px;
    height: 2rem;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #865DFF;
    border-radius: 1rem;
    font-weight: bold;
    color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`