import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div className="relative border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          infinite
          disableDotsControls
        />

        <Button
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


        <Button
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
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
