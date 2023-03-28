import React from "react";
import styled from "styled-components";
import Exampleimages from "./Exampleimages";
import exampleimage1 from "../assets/image1.jpg";
import exampleimage2 from "../assets/image2.jpg";
import exampleimage3 from "../assets/image3.jpg";
import exampleimage4 from "../assets/image4.jpg";
import exampleimage5 from "../assets/image5.jpg";
import exampleimage6 from "../assets/image6.jpg";
import { UserContext } from "../pages/Home";
import "./Dropfile.css";
import { useContext } from "react";
import axios from "axios";

export default function Example() {
  const {
    // selectedImage,
    setSelectedImage,
    // imageurl,
    setimageurl,
    setoutputurl,
    setoutput,
  } = useContext(UserContext);

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
    console.log(img)
    setoutput(false);
    const imgBlob = await fetch(img).then((res) => res.blob());
    setoutputurl(false)
    setSelectedImage(img);
    setimageurl(img);
    const formData = new FormData();
    formData.append("img", imgBlob, img);
    const postdata = async () => {
      formData.forEach((data) => {
        console.log(data)
      })
      await axios
        .post("https://predict-ebi2uybfrq-el.a.run.app/", formData)
        .then((data) => {
          const image = new Image();
          image.src = img;
          image.onload = () => {
            if (data.data) {
              console.log(data.data)
              const visual = visualizeDetection(image, data.data);
              setoutputurl(visual);
            }
            else {
              alert('something went wrong!!')
            }
          };
        }).catch(() => {
          alert('something went wrong!!')
        });
    };
    postdata();
  };
  return (
    <>
      <div>
        <h3>EXAMPLE IMAGES TO TEST</h3>
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
  grid-template-columns: repeat(auto-fill, minmax(50px, 450px));  /* 3 columns */
  grid-template-rows: repeat(2,250px); /* 3 rows  */
  grid-gap:50px 30px; 
  gird-wrap: wrap;
  // padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width:990px) {
   flex-wrap: wrap;
   height: 350vh;
  }
`;
