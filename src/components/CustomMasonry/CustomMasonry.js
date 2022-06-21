import React from "react";
import { Masonry } from "@mui/lab";

import "./CustomMasonry.css";

const CustomMasonry = () => {
  const heights = [100, 23, 542, 32, 56, 250, 123, 34, 50, 60, 72, 29];
  return (
    <Masonry columns={3} spacing={2}>
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
