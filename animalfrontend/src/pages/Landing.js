import Bg from '../assets/bg-img.png';
import { Link } from "react-router-dom";
// import Cover from "../assets/cover.png";
import Logo from "../assets/logo.png";
import './Landing.css';

const Landing = () => {
    return <>
        <img className='img' src={Bg} alt="bg-img" />
        <div >
            <img className='cover' src={'https://res.cloudinary.com/vighnesh/image/upload/v1680424741/tx-03-banner.jpg'} alt="cover" />
            <img className='logo' src={Logo} alt="logo" />
            <div className='overlay' >
                <h1 className='title' >WILDLIFE DETECTION AND EVALUATION FROM CAMERA-TRAP IMAGES USING DEEP LEARNING</h1>
                <Link to="/home" className='button'>Explore more →</Link>
            </div>
            <h1 className='subtitle'>Objective</h1>
            <p className='para'>Wildlife monitoring and analysis is a well-established research field with a focus on tropical forests. These environments pose challenges due to dense vegetation and elusive species. Common monitoring methods include human observations, camera traps, and passive acoustic sensors. Camera traps and acoustic sensors are effective for observing rare and cryptic species, and provide photographs for verification.</p>

            <div className='center'>
                <h1 className='subtitle'>About Project</h1>
                <p className='para1'>Nature is degenerating globally at unprecedented rates, and various human-driven changes have accelerated biodiversity loss. The Living Planet Report 2020 reveals that populations of mammals, birds, fish, amphibians, and reptiles have fallen by 68% over the past 50 years. There is an urgent need to understand the mechanisms of biodiversity loss in the context of increasing anthropogenic disturbance. Therefore, we have to obtain timely and exact information on the species’ distribution, richness, abundance, and community structure. Camera trap surveys can provide valuable information for ecologists and wildlife conservation scientists on the species richness distribution, animal behaviour, population density, community dynamics, and so forth. Camera traps enable the automatic collection of large quantities of image data. Ecologists use camera traps to monitor animal populations all over the world. In order to estimate the abundance of a species from camera trap data, ecologists need to know not just which species were seen, but also how many individuals of each species were seen. Object detection techniques can be used to find the number of individuals in each image. For model testing and training, we used the Kaggle iWildcam2022 dataset, and for accuracy, we excluded classes with less images. We divided the 18500 total photos we had into training and testing groups, which were subsequently used for model training and validation. We used Detectron 2, which is based on the maskrcnn benchmark, to propose our model. In PyTorch, it is implemented. It gave us a stable platform with the greatest performance for object detection. Our model can recognise or detect 14 different animal classes with bounding box and instance segmentation .</p>
            </div>
        </div>
    </>
};


export default Landing;