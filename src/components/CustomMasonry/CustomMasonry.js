import React from "react";
import { Masonry } from "@mui/lab";

import { isMobileOnly, isTablet } from "react-device-detect";

import portfolio1 from "../../assets/Portfolio-1.jpg";
import portfolio2 from "../../assets/Portfolio-2.jpg";
import portfolio3 from "../../assets/Portfolio-3.jpg";
import portfolio4 from "../../assets/Portfolio-4.jpg";
import portfolio5 from "../../assets/Portfolio-5.jpg";
import portfolio6 from "../../assets/Portfolio-6.jpg";
import portfolio7 from "../../assets/Portfolio-7.jpg";
import portfolio8 from "../../assets/Portfolio-8.jpg";
import portfolio9 from "../../assets/Portfolio-9.jpg";
import portfolio10 from "../../assets/Portfolio-10.jpg";

import "./CustomMasonry.scss";

const CustomMasonry = () => {
  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
  ];
  const numOfColumns = isMobileOnly ? 1 : isTablet ? 2 : 3;

  return (
    <Masonry columns={numOfColumns} spacing={2} className="masonry">
      {images.map((img, i) => (
        <img
          key={i}
          className="masonry-item"
          src={img}
          alt="masonry img"
          loading="lazy"
        />
      ))}
    </Masonry>
  );
};

export default CustomMasonry;
