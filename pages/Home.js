import React, { useState, useEffect } from "react";
import Corousel from "../components/Corousel";
import { generateArray } from "../helpers";
import FinishModal from "../components/FinishModal";
import { Button } from "react-bootstrap";

function selectNumberOfSlides(
  e,
  selectedSlides,
  setSelectedSlides,
  setCurrentSelectedSlides
) {
  if (e.detail === 0) {
    setSelectedSlides([...selectedSlides, e.target.value]);
    setCurrentSelectedSlides(e.target.value);
  }
}

function Home() {
  const [slides, setSlides] = useState(generateArray(20));
  const [selectedSlides, setSelectedSlides] = useState([]); // Selected Slides
  const [currentSelectedSlide, setCurrentSelectedSlides] = useState(null); // Current Active Slide

  const [show, setShow] = useState(false); // State for handling Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="content">
      <section>
        <div className="section1">
          <h4 className="selectSlide">Select Slide : &nbsp;</h4>
          <select
            className="slides"
            onClick={e =>
              selectNumberOfSlides(
                e,
                selectedSlides,
                setSelectedSlides,
                setCurrentSelectedSlides
              )
            }
          >
            <option value="" selected="selected" disabled="disabled">
              Select
            </option>
            {slides.map((slide, index) => (
              <option key={index} value={slide + 1}>
                {" "}
                {slide + 1}{" "}
              </option>
            ))}
          </select>
        </div>
      </section>
      <br />
      <br />
      {selectedSlides.length > 0 ? (
        <section>
          <Corousel currentSelectedSlide={currentSelectedSlide} />
          <br />
          <Button variant="primary" onClick={handleShow} className="finish">
            Finish
          </Button>
        </section>
      ) : null}
      <FinishModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        selectedSlides={selectedSlides}
      />
    </div>
  );
}

export default Home;
