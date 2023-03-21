import React from 'react'
import styled from 'styled-components'

export default function Outputdrop() {
  return (
    <Outputcontainer>
        <h1>output</h1>
    </Outputcontainer>
  )
}

const Outputcontainer=styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`