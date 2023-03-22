import React from "react";
import styled from "styled-components";
import DropFileInput from "./Dropbox";

export default function Inpurdrop() {
  return (
    <Inputcontainer>
      <h5>Input Image</h5>
      <DropFileInput />
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
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
@media (max-width:990px) {
  width: 100%;
}
`;
