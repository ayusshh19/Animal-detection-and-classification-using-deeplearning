import { useState, createContext } from "react";
import Example from '../components/Example';
import Classes from '../components/Classes';
import Inputdrop from '../components/Inputdrop';
import Outputdrop from '../components/Outputdrop';
import styled from 'styled-components'
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import './Home.css';

export const UserContext = createContext()
const Home = () => {
    const [selectedImage, setSelectedImage] = useState(false);
    const [imageurl, setimageurl] = useState(false)
    const [outputurl, setoutputurl] = useState(false)
    const [loading, setloading] = useState(false)
    const [output, setoutput] = useState(true)
    return <>
        <UserContext.Provider value={{ selectedImage, setSelectedImage, imageurl, setimageurl, outputurl, setoutputurl, loading, setloading, output, setoutput }}>
            <Appcontainer>
                <Link to="/home">
                    <img className='logo' src={Logo} alt="logo" ></img>
                </Link>
                <h1 className="heading">WILDLIFE DETECTION AND EVALUATION FROM
                    CAMERATRAP IMAGES USING DEEP LEARNING</h1>
                <Maincontainer>
                    <Inputdrop />
                    <Outputdrop />
                </Maincontainer>
                <Example />
                <Classes />
            </Appcontainer>
        </UserContext.Provider>
    </>;
};

const Appcontainer = styled.div`
width: 100%;
overflow-x: hidden;
`
const Maincontainer = styled.div`
height: 75vh;
width: 100%;
padding: 2rem;
display: flex;
align-items: center;
justify-content: space-evenly;
@media (max-width:990px) {
  flex-direction: column;
  height: 100vh;
  padding: 0rem;
}
`

export default Home;