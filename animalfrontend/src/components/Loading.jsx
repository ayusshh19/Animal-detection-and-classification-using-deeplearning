import React from "react";
import styled from "styled-components";
import loadinggif from "../assets/loading.gif";
export default function Loading() {
  return (
    <Loadingcomponent>
      <img src={loadinggif} alt="" srcset="" height={'60%'} width={'60%'} />
    </Loadingcomponent>
  );
}

const Loadingcomponent = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
