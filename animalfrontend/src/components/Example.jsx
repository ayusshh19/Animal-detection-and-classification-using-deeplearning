import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../pages/Home";
import Exampleimages from "./Exampleimages";
import "./Dropfile.css";
import { useContext } from "react";
import axios from "axios";
export default function Example() {
  const {
    setSelectedImage,
    output,
    outputurl,
    setimageurl,
    setoutputurl,
    setoutput,
    setclickablecard,
  } = useContext(UserContext);
  const [urls,seturls]=useState([])
  const allimgurls = [
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446107/Animaldetection/jr0glieyrdu9kvnz47zn.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446107/Animaldetection/ws0su9fbdy5w4sdwzhji.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446107/Animaldetection/xiazm6o8tlnw5nzovdjw.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446107/Animaldetection/dgw6xp63ylefesrfy06s.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446106/Animaldetection/omnbc9jz21tdkfdv3ypx.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446106/Animaldetection/vgd9zyssuyqic9cmejot.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446106/Animaldetection/cekwhesgkkkvxvsabub3.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446106/Animaldetection/tn1fd6sjqvbsj1pargzp.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446106/Animaldetection/w7fbald8kfm31eu4mv09.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446106/Animaldetection/b1ilp6y2wikchprcjftk.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446105/Animaldetection/xdg4lml9sqjkkxddle7g.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446105/Animaldetection/b3ppuyfownzjzdrdgde2.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446105/Animaldetection/r6xaaqtxydwxzkeyskul.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446105/Animaldetection/d18w25qdsxkyoomrffxw.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446105/Animaldetection/vb2qkk7allg74gdkhs1o.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/a2eukkb1q0pr269ut4iv.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/fa4nswwqmbyn2u7hsefm.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/uyl7csyuvha3vlwosros.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/x7uhwvoxaxhbzjxtshcp.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/quyiy0csmatl0ee7we0u.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/z3gi5sn72uvexgv9dz05.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/hdv5d7xgwwrjradxa6ca.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/jgdeaqhvasjt9butlgki.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446104/Animaldetection/oemuvqbyr9w4fgaye61y.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/ivrgh0kzwmg4ae6vgq0x.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/nrhvs5ih1kfljjpjkwhd.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/rtckvhbtgyc9z80ku2pr.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/t5ktdduypz8ad7ytnaqq.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/q3sjdmckbhubvyy7nzsh.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/qbqzoseoh340j4kdguqn.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/hzcrrb6b0bzfnrbjqisx.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/eidkcvmwobzn373dzhih.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446103/Animaldetection/qvolgdhzha4bywduxil1.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/ibzgkbcqgyx1j184giix.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/j3y4tnlud8i53gjmyysu.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/beoxqh0xxfwjrrv3aavz.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/kiitvifs8mqacb3xamv0.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/njegvujjdskag2ficre2.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/uwmdyrljm0vgxj6hvisq.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446102/Animaldetection/jl9hfbpdoymn8oj9zqai.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446101/Animaldetection/n6pzfhcap39e18almczm.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446101/Animaldetection/y8tqcy3dvbnkkj6ym4rp.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446101/Animaldetection/hhjsy3okwhojlrb07inh.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446101/Animaldetection/l87jzx5to4qga7y3ndtk.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446101/Animaldetection/zvnp6dsqlfzecbuy4hes.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446100/Animaldetection/r8ljzo3n0pbfpzwia1bj.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446100/Animaldetection/dr5nza7nqthpnxklej5a.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446100/Animaldetection/iknv2llu9dlgqv70vcut.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446100/Animaldetection/gy6m8whvdnuuwapcp38u.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446100/Animaldetection/pwcpi2sfppephoyscibn.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446099/Animaldetection/anrilxdpqpklknlcmu9n.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446099/Animaldetection/iarw4qopmiswapi8bwgm.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446099/Animaldetection/f8hgqkwyhhxeztiejedt.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446099/Animaldetection/mc9mv1axuo0e6aakfrbb.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446099/Animaldetection/whwvuoti4rajqvyr3phc.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446099/Animaldetection/zyuigab9nzoq8xsqigig.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/nt0tklqqejwi1xzemmp8.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/yuw77mux0tqgwjur1b1x.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/tc9cz214h075czpnbkem.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/ws8ly04xo81rmww1xbxi.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/xetrh5jyojb4ntedj9nz.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/dz0necaax98bsyki3kl6.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446097/Animaldetection/daqrpcjacewijefbdm1k.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446097/Animaldetection/gzxoyt9eezhzvpnlznwi.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446098/Animaldetection/zn3gatftcrj1mie3knyv.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446097/Animaldetection/kto0mmsjshrzygotienx.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446097/Animaldetection/lcgt1xutcxmw85pwgfru.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446097/Animaldetection/rflwucmpkfzim2jqsgs7.jpg",
    "https://res.cloudinary.com/dbeptj8fp/image/upload/v1680446097/Animaldetection/qmntfs2vuixa8ytakgmk.jpg",
  ];
  // const allimg=[]
  useEffect(()=>{
    const randomIndexes = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * allimgurls.length)
    );
    const randomArray = randomIndexes.map((index) => allimgurls[index]);
    seturls(randomArray)

  },[])
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
    console.log(canvas)
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
            image.crossOrigin = 'anonymous';
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
          {
            urls.map((data)=>{

              return <Exampleimages setoutput={getoutput} eximg={data} />
            })
          }
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
