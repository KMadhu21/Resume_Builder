import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carosol = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  useEffect(()=>{
    let gggg = setInterval(()=>{
      let c = currentImage === images.length - 1 ? 0 : currentImage + 1
      setCurrentImage(c);
    },5000)
    // return clearInterval(gggg);
  })

  return (
    <div className="container">
    <div className="carousel">
      <div className="carousel__image-container" id="cor">
        <FaChevronLeft className="carousel__icon carousel__icon--left" onClick={previousImage} />
        <img className="carousel__image" src={images[currentImage]} alt={`Image ${currentImage}`} style={{width:"60%",height:"700px"}} />
        <FaChevronRight className="carousel__icon carousel__icon--right" onClick={nextImage} />
      </div>
    </div>
    </div>
  );
};

export default Carosol;
