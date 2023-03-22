import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";
import "./Dropfile.css";
import { useContext } from "react";
import uploadImg from "../assets/cloud-upload-regular-240.png";
import Imagecontainer from "./Imagecontainer";
import axios from "axios";
const DropFileInput = (props) => {
  const { selectedImage, setSelectedImage, imageurl, setimageurl,setoutputurl ,setoutput} =
    useContext(UserContext);
  const wrapperRef = useRef(null);

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

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  const onFileDrop = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setoutput(false)
      setSelectedImage(e.target.files[0]);
      setimageurl(URL.createObjectURL(e.target.files[0]));
      const formData = new FormData();
      console.log(e.target.files[0]);
      formData.append("img",e.target.files[0]);
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1].name)
    }
      const postdata = async () => {
        await axios.post(
          "https://predict-ebi2uybfrq-el.a.run.app/",
          formData
        ).then((data)=>{
            const image = new Image();
            image.src = URL.createObjectURL(e.target.files[0])
            image.onload = () => {
                const visual=visualizeDetection(image, data.data);
                setoutputurl(visual)
              };
        });
      };
      postdata();
    }
  };

  return (
    <>
      {selectedImage ? (
        <Imagecontainer image={imageurl} />
      ) : (
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            <img src={uploadImg} alt="" />
            <p>Drag & Drop your files here Max 1 Image</p>
          </div>
          <input type="file" value="" onChange={onFileDrop} multiple />
        </div>
      )}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
