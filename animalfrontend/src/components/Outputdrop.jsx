import React from "react";
import styled from "styled-components";
import { UserContext } from "../pages/Home";
import { useContext } from "react";
import Imagecontainer from "./Imagecontainer";
import Loading from "./Loading";
import outputimg from "../assets/output.png";
export default function Outputdrop() {
  const { outputurl, output } = useContext(UserContext);
  return (
    <Outputcontainer>
      {output ? (
        <Imagecontainer image={outputimg} width={'50%'} height={'60%'} />
      ) : outputurl ? (
        <Imagecontainer image={outputurl} width={'100%'} height={'100%'} />
      ) : (
        <Loading />
      )}
      <h5>OUTPUT IMAGE</h5>
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
  border: 2px solid #224D4F;
  // box-shadow: 0 0 10px 5px #48abe0,
  //             0 0 20px 7px #ebecca,
  //             0 0 15px 15px #8a2be2;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
  border-radius: 2rem;
  @media (max-width:990px) {
  width: 90%;
  height: 20rem;
  margin: 0rem 1rem;
}
`;
