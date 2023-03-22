import React from 'react'
import styled from 'styled-components'

export default function Exampleimages(props) {
  return (
    <Exampleset onClick={()=>props.setoutput(props.eximg)}>
        <img src={props.eximg} alt="" srcset="" />
    </Exampleset>
  )
}
const Exampleset=styled.div`
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:990px) {
      width: 150px;
      margin: 0.3rem;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`