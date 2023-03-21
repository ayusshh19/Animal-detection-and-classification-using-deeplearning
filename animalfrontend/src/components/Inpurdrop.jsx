import React from "react";
import styled from "styled-components";
import DropFileInput from "./Dropbox";

export default function Inpurdrop() {
  return (
    <Inputcontainer>
      <DropFileInput />
    </Inputcontainer>
  );
}

const Inputcontainer = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
