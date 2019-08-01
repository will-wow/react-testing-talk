import React from "react";
import { Image } from "mdx-deck";

const BgImage = ({ opacity, backgroundSize, backgroundColor, ...props }) => {
  return (
    <Image
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundSize,
        opacity,
        backgroundColor
      }}
    />
  );
};

BgImage.defaultProps = {
  opacity: 1,
  backgroundColor: "white",
  backgroundSize: "contain"
};

export default BgImage;
