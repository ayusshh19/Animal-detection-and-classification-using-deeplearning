import './App.css';
import styled from 'styled-components'
import Inpurdrop from './components/Inpurdrop';
import Outputdrop from './components/Outputdrop';
import { useState, createContext } from "react";
import Example from './components/Example';
import Classes from './components/Classes';
export const UserContext = createContext()
function App() {
  const [selectedImage, setSelectedImage] = useState(false);
  const [imageurl, setimageurl] = useState(false)
  const [outputurl, setoutputurl] = useState(false)
  const [loading, setloading] = useState(false)
  const [output, setoutput] = useState(true)
  return (
    <UserContext.Provider value={{ selectedImage, setSelectedImage, imageurl, setimageurl, outputurl, setoutputurl, loading, setloading, output, setoutput }}>
      <Appcontainer>
        <h3>WILDLIFE DETECTION AND EVALUATION FROM
          CAMERATRAP IMAGES USING DEEP LEARNING</h3>
        <Maincontainer>
          <Inpurdrop />
          <Outputdrop />
        </Maincontainer>
        <Example />
        <Classes />
      </Appcontainer>
    </UserContext.Provider>
  );
}
const Appcontainer = styled.div`
width: 100%;
`
const Maincontainer = styled.div`
height: 50vh;
padding: 2rem;
display: flex;
align-items: center;
justify-content: space-evenly;
@media (max-width:990px) {
  flex-direction: column;
  height: 90vh;
}
`
export default App;
