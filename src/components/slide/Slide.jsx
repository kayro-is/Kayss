import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplayScroll={1} autoplay={true}> 
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;