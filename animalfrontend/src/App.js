import './App.css';
import styled from 'styled-components'
import Inpurdrop from './components/Inpurdrop';
import Outputdrop from './components/Outputdrop';
import { useState, createContext  } from "react";
export const UserContext = createContext()
function App() {
  const [selectedImage, setSelectedImage] = useState(false);
  const [imageurl,setimageurl]=useState(false)
  const [outputurl,setoutputurl]=useState(false)
  const [loading,setloading]=useState(false)
  return (
    <UserContext.Provider value={{ selectedImage , setSelectedImage,imageurl,setimageurl,outputurl,setoutputurl,loading,setloading}}>
    <Appcontainer>
      <Maincontainer>
        <Inpurdrop />
        <Outputdrop />
      </Maincontainer>
    </Appcontainer>
    </UserContext.Provider>
  );
}
const Appcontainer=styled.div`
width: 100%;
`
const Maincontainer=styled.div`
width: 100%;
height: 50vh;
padding: 2rem;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export default App;
