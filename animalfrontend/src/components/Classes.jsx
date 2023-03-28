import React from "react";
import styled from "styled-components";
import Cardbox from "./Cardbox";

export default function Classes() {
  const classlist = [
    "madoqua guentheri",
    "tapirus bairdii",
    "crax rubra",
    "meleagris ocellata",
    "loxodonta africana",
    "aepyceros melampus",
    "puma concolor",
    "cephalophus nigrifrons",
    "tayassu pecari",
    "panthera onca",
    "bos taurus",
    "leopardus pardalis",
    "mazama temama",
    "dasyprocta punctata",
  ];
  return (
    <>
      <h3>CLASSES</h3>
      <Classescontainer>
        <div className="mainclasslist">
          {classlist.map((data) => {
            return <Cardbox data={data} />;
          })}
        </div>
      </Classescontainer>
    </>
  );
}

const Classescontainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  .mainclasslist{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
