/** @jsx jsx */
import { jsx } from "theme-ui";

import { Image } from "mdx-deck";

const BgImage = ({
  opacity,
  color,
  backgroundSize,
  backgroundColor,
  ...props
}) => {
  return (
    <Image
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color,
        backgroundSize,
        opacity,
        backgroundColor
      }}
    />
  );
};

BgImage.defaultProps = {
  color: "white",
  opacity: 1,
  backgroundColor: "white",
  backgroundSize: "contain"
};

export default BgImage;
