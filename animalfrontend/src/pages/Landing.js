import Bg from '../assets/bg-img.png';
import { Link } from "react-router-dom";
import Cover from "../assets/cover.png";
import Logo from "../assets/logo.png";
import './Landing.css';

const Landing = () => {
    return <>
        <img className='img' src={Bg} alt="bg-img" />
        <div >
            <img className='cover' src={Cover} alt="cover" />
            <img className='logo' src={Logo} alt="logo" />
            <div className='overlay' >
                <h1 className='title' >WILDLIFE DETECTION AND EVALUATION FROM CAMERA-TRAP IMAGES USING DEEP LEARNING</h1>
                <Link to="/" className='button'>Explore more →</Link>
            </div>
            <h1 className='subtitle'>MISSION</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>

            <div className='center'>
                <h1 className='subtitle'>THE TECHNOLOGY</h1>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
                {/* <h1 className='subtitle'>THE TEAM</h1>
                <ul>
                    <li className='para'>Vighnesh Manjrekar</li>
                    <li className='para'>Ruchita Sonawale</li>
                    <li className='para'>Ayush Shukla</li>
                </ul> */}
            </div>
        </div>
    </>
};


export default Landing;