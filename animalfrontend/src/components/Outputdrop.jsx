import React from "react";
import styled from "styled-components";
import { UserContext } from "../App";
import { useContext } from "react";
import Imagecontainer from "./Imagecontainer";
import Loading from "./Loading";
import outputimg from "../assets/output.png";
export default function Outputdrop() {
  const { outputurl, output, setoutput } = useContext(UserContext);
  return (
    <Outputcontainer>
      <h5>Output Image</h5>
      {output ? (
        <Imagecontainer image={outputimg} />
      ) : outputurl ? (
        <Imagecontainer image={outputurl} />
      ) : (
        <Loading />
      )}
    </Outputcontainer>
  );
}

const Outputcontainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width:990px) {
    width: 100%;
    margin: 0.5rem;
  }
`;
