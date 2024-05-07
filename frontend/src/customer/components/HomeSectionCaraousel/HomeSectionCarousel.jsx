import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useRef } from "react";

const HomeSectionCarousel = ({ data,sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const caraouselRef=useRef(null);



  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const prevSlide = () =>{caraouselRef.current.slidePrev();
    setActiveIndex(activeIndex-1);
  } 
  const nextSlide = () => {
    setActiveIndex(activeIndex + 1);
    caraouselRef.current.slideNext();

  };

  const items = data
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="relative border">
      <h2 className="text-2xl font-extrabold text-gray-800 p-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          ref={caraouselRef}

        />

        {activeIndex !== items.length - 1 && (
          <Button
            onClick={nextSlide}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              bgcolor: "white",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ color: "black", transform: "rotate(90deg)" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={prevSlide}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              bgcolor: "white",
              transform: "translateX(-50%) rotate(-90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ color: "black", transform: "rotate(90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
