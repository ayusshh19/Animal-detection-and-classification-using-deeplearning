import React from "react";
import styled from "styled-components";
import DropFileInput from "./Dropbox";

export default function Inputdrop() {
  return (
    <Inputcontainer>
      <DropFileInput />
      <h5>INPUT IMAGE</h5>
    </Inputcontainer>
  );
}

const Inputcontainer = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// border: 2px solid #48abe0;
border: 2px solid #224D4F;
border-radius: 2rem;
// box-shadow: 0 0 10px 5px #48abe0,
//               0 0 20px 7px #ebecca,
//               0 0 15px 15px #8a2be2;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
@media (max-width:990px) {
  width: 100%;
  margin: 1rem 1rem;
}
`;
