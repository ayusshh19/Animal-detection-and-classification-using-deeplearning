import React from 'react'
import styled from 'styled-components'

export default function Imagecontainer(props) {
  return (
    <Imagedrop>
        <img src={props.image} alt="" srcset="" />
    </Imagedrop>
  )
}
const Imagedrop=styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 100%;
    height: 100%;
}
`