import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Exampleimages from "./Exampleimages";
import exampleimage1 from "../assets/image1.jpg";
import exampleimage2 from "../assets/image2.jpg";
import exampleimage3 from "../assets/image3.jpg";
import exampleimage4 from "../assets/image4.jpg";
import exampleimage5 from "../assets/image5.jpg";
import exampleimage6 from "../assets/image6.jpg";
// import exampleimage7 from "../assets/image7.jpg";
// import exampleimage8 from "../assets/image8.jpg";
// import exampleimage9 from "../assets/image9.jpg";
// import exampleimage10 from "../assets/image10.jpg";
// import exampleimage11 from "../assets/image11.jpg";
// import exampleimage12 from "../assets/image12.jpg";
// import exampleimage13 from "../assets/image13.jpg";
// import exampleimage14 from "../assets/image14.jpg";
// import exampleimage15 from "../assets/image15.jpg";
// import exampleimage16 from "../assets/image16.jpg";
// import exampleimage17 from "../assets/image17.jpg";
// import exampleimage18 from "../assets/image18.jpg";
// import exampleimage19 from "../assets/image19.jpg";
// import exampleimage20 from "../assets/image20.jpg";
// import exampleimage21 from "../assets/image21.jpg";
// import exampleimage22 from "../assets/image22.jpg";
// import exampleimage23 from "../assets/image23.jpg";
// import exampleimage24 from "../assets/image24.jpg";
// import exampleimage25 from "../assets/image25.jpg";
// import exampleimage26 from "../assets/image26.jpg";
// import exampleimage27 from "../assets/image27.jpg";
// import exampleimage28 from "../assets/image28.jpg";
// import exampleimage29 from "../assets/image29.jpg";
// import exampleimage30 from "../assets/image30.jpg";
import { UserContext } from "../pages/Home";
import "./Dropfile.css";
import { useContext } from "react";
import axios from "axios";
// Import the Cloudinary classes.
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { CloudinaryImage } from "@cloudinary/url-gen";
// import { CloudinaryContext, Image } from "cloudinary-react";
// import cloudinary from "cloudinary";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
export default function Example() {
  const [imageUrl, setImageUrls] = useState('');

  useEffect(() => {
    const fetchImageUrls = async () => {
      const response = await fetch('https://api.cloudinary.com/v1_1/dbeptj8fp/resources/image/fetch/f_auto/https://res.cloudinary.com/dbeptj8fp/image/upload/v1234567/Animaldetection/*.jpg');
      const data = await response.json();
      const urls = data.resources.map(resource => resource.url);
      setImageUrls(urls);
      console.log(urls)
    };
    fetchImageUrls();
  }, []);
     // const cl = new cloudinary.Cloudinary({
    //   cloud_name: "dbeptj8fp",
    //   api_key: "671723357986269",
    //   api_secret: "oYz8u2Y2AqJ9SletYLmDgO6naa8",
    // });
  useEffect(() => {
    // Set up the Cloudinary configuration
 
    // console.log(cl);
    // const getdata = async () => {
    //   cl.search.expression("folder:Animaldetection").execute().then((result) => {
    //     const imageUrls = result.resources.map((resource) => resource.url);
    //     setImageUrls(imageUrls);
    //     console.log(imageUrls)
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // };
    // getdata();
    // console.log(imageUrls);
    // setImageUrls(imageUrls);
  }, []);
  // const myImage = new CloudinaryImage('Animaldetection', {cloudName: 'dbeptj8fp'}).resize(fill().width(100).height(150));
  // console.log(myImage)
  const {
    // selectedImage,
    setSelectedImage,
    // imageurl,
    output,
    outputurl,
    setimageurl,
    setoutputurl,
    setoutput,
    setclickablecard,
  } = useContext(UserContext);
  // const allimg=[]
  const visualizeDetection = (image, outputs) => {
    const boxes = outputs.bbox;
    const labels = outputs.class;
    const confi = outputs.confidence;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.font = "30px Arial";
    // alert(boxes)

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      const x1 = box[0];
      const y1 = box[1];
      const x2 = box[2];
      const y2 = box[3];
      const label = labels[i] + " " + confi[i].toFixed(2);

      ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);

      ctx.fillStyle = "red";
      ctx.fillRect(x1 - 2, y1 - 38, ctx.measureText(label).width + 10, 40);
      ctx.fillStyle = "white";
      ctx.fillText(label, x1, y1 - 8);
    }

    return canvas.toDataURL();
  };
  const getoutput = async (img) => {
    if (output || outputurl) {
      setoutput(false);
      const imgBlob = await fetch(img).then((res) => res.blob());
      setoutputurl(false);
      setSelectedImage(img);
      setimageurl(img);
      const formData = new FormData();
      formData.append("img", imgBlob, img);
      const postdata = async () => {
        formData.forEach((data) => {
          console.log(data);
        });
        await axios
          .post("https://predict-ebi2uybfrq-el.a.run.app/", formData)
          .then((data) => {
            const image = new Image();
            image.src = img;
            image.onload = () => {
              if (data.data) {
                console.log(data.data);
                const visual = visualizeDetection(image, data.data);
                setoutputurl(visual);
                setclickablecard(true);
              } else {
                alert("something went wrong!!");
              }
            };
          })
          .catch(() => {
            alert("something went wrong!!");
          });
      };
      postdata();
    } else {
      alert("pls wait");
    }
  };
  return (
    <>
      <div>
        <h3>EXAMPLE IMAGES TO TEST</h3>
        {/* <CloudinaryContext cloudName="dbeptj8fp">
          <Image publicId="your_image_public_id" />
        </CloudinaryContext> */}
        <Examplecontainer>
          <Exampleimages setoutput={getoutput} eximg={exampleimage1} />
          <Exampleimages setoutput={getoutput} eximg={exampleimage2} />
          <Exampleimages setoutput={getoutput} eximg={exampleimage3} />
          <Exampleimages setoutput={getoutput} eximg={exampleimage4} />
          <Exampleimages setoutput={getoutput} eximg={exampleimage5} />
          <Exampleimages setoutput={getoutput} eximg={exampleimage6} />
        </Examplecontainer>
      </div>
    </>
  );
}

const Examplecontainer = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 450px)); /* 3 columns */
  grid-template-rows: repeat(2, 250px); /* 3 rows  */
  grid-gap: 50px 30px;
  // padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 990px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    height: 100%;
  }
`;
