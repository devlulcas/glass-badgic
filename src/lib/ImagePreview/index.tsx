import React from "react";
import { Box } from "./styles";

const ImagePreview: React.FC = () => {
  const baseUrl = "https://img.shields.io/static/v1?";
  const label = "label=js";
  const labelColor = "&labelColor=00303b";
  const message = "&message=javascript";
  const messageColor = "&color=ffce96";
  const logo = "&logo=javascript";
  const logoColor = "&logoColor=f1f2da";
  const style = "&style=for-the-badge";

  const finalUrl =
    baseUrl +
    label +
    labelColor +
    message +
    messageColor +
    logo +
    logoColor +
    style;

  return (
    <Box>
      <img src={finalUrl} alt="badge" />
    </Box>
  );
};

export default ImagePreview;
