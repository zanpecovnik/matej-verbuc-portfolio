import React from "react";
import { Masonry } from "@mui/lab";

import "./CustomMasonry.css";
import { isMobileOnly, isTablet } from "react-device-detect";

const CustomMasonry = () => {
  const heights = [100, 23, 142, 32, 56, 250, 123, 34, 50, 60, 72, 29];
  const numOfColumns = isMobileOnly ? 1 : isTablet ? 2 : 3;

  return (
    <Masonry columns={numOfColumns} spacing={2}>
      {heights.map((h, idx) => (
        <div
          key={idx}
          className="masonry-item"
          style={{
            height: `${h}px`,
          }}
        >
          {idx + 1}
        </div>
      ))}
    </Masonry>
  );
};

export default CustomMasonry;
