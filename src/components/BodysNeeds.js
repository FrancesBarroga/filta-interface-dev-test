import React, { useState } from "react";
import { Modal } from "@mui/material";
import image1 from "../assets/images/image1c1.jpg";
import image2 from "../assets/images/image2c1.jpg";
import image3 from "../assets/images/image3c1.jpg";
import { description, quote } from "../data/bodysNeedsData";
import "../styles/common.css";
import "../styles/bodyNeeds.css";

function BodysNeeds() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <div className="container">
      <div className="layout">
        <div className="img-layout">
          <div
            className="img-container imgs"
            onClick={() => {
              setOpenModal(true);
              setSelectedImg(image1);
              console.log("image 1");
            }}
          >
            <img className="portrait-img" src={image1} alt="image1" />
          </div>
          <div className="imgs">
            <div
              className="img-container"
              onClick={() => {
                setOpenModal(true);
                setSelectedImg(image2);
                console.log("image 2");
              }}
            >
              <img className="thumbnail-img" src={image2} alt="image2" />
            </div>
            <div
              className="img-container"
              onClick={() => {
                setOpenModal(true);
                setSelectedImg(image3);
                console.log("image 3");
              }}
            >
              <img className="thumbnail-img" src={image3} alt="image3" />
            </div>
          </div>
        </div>

        <div className="text-container">
          <h2 className="title">Answer your Body's Needs</h2>
          <div style={{ border: "0.5px solid #fff", margin: "1rem 0" }} />
          <div className="description">{description}</div>
          <div className="sub-title">Be Mindful</div>
          <div className="quote">{quote}</div>
        </div>
      </div>
      <div>
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setSelectedImg("");
          }}
        >
          <div className="modal-img">
            <img src={selectedImg} alt="image2" />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default BodysNeeds;
