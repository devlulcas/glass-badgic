import React, { useEffect } from "react";
import { useBadgeStyle } from "../../hooks/BadgeStyle";
import useImageColor from "../../hooks/Color";
import useImageFields from "../../hooks/ImageFields";
import { useImageUrl } from "../../hooks/ImageUrl";
import { Box } from "./styles";

const ImagePreview: React.FC = () => {
  const { imageColors } = useImageColor();
  const { imageFields } = useImageFields();
  const { imageStyle } = useBadgeStyle();
  const { saveImageUrl } = useImageUrl();

  const baseUrl = "https://img.shields.io/static/v1?";

  const label = `label=${imageFields.label}`;
  const labelColor = `&labelColor=${imageColors.labelColor}`;
  const message = `&message=${imageFields.message}`;
  const messageColor = `&color=${imageColors.messageColor}`;
  const logo = `&logo=${imageFields.logo}`;
  const logoColor = `&logoColor=${imageColors.logoColor}`;
  const badgeStyle = `&style=${imageStyle}`;

  const finalUrl = `${baseUrl}${label}${labelColor}${message}${messageColor}${logo}${logoColor}${badgeStyle}`;

  useEffect(() => {
    saveImageUrl({ imageUrl: finalUrl });
  }, [finalUrl]);

  return (
    <Box>
      <img src={finalUrl} alt="badge" />
    </Box>
  );
};

export default ImagePreview;
