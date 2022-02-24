import React, { useContext } from "react";
import useImageColor from "../../hooks/Color";
import useImageFields from "../../hooks/ImageFields";
import { Box } from "./styles";

const ImagePreview: React.FC = () => {
  const { imageColors } = useImageColor();
  const { imageFields } = useImageFields();

  const baseUrl = "https://img.shields.io/static/v1?";
  const label = "label=" + imageFields.label;
  const labelColor = "&labelColor=" + imageColors.labelColor;
  const message = "&message=" + imageFields.message;
  const messageColor = "&color=" + imageColors.messageColor;
  const logo = "&logo=" + imageFields.logo;
  const logoColor = "&logoColor=" + imageColors.logoColor;
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
