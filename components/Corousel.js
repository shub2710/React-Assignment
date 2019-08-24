import React from "react";
import { Carousel } from "react-responsive-carousel";
import { generateArray, capitalizeFirstLetter } from "../helpers";
import numberToWords from "number-to-words";

function Corousel(props) {
  const { currentSelectedSlide } = props;

  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
      {generateArray(currentSelectedSlide).map(slide => {
        return (
          <div key={slide}>
            <img src="static/images/shaadiImage.jpg" />
            <h3 className="numberToText">
              {capitalizeFirstLetter(numberToWords.toWords(slide + 1))}
            </h3>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Corousel;
