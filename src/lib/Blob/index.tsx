import React from "react";
import { BlobElement } from "./styles";
import randint from "../../utils/Random";
import { Coordinates } from "../../types/Coordinates";

interface IBlobProps {
  initialPosition: Coordinates;
}

const Blob: React.FC<IBlobProps> = ({ initialPosition }) => {
  const diameterNumber = randint(20, 80);
  const diameterSize = `${diameterNumber}rem`;

  const animation = {
    drag: true,
    style: {
      width: diameterSize,
      height: diameterSize,
      x: `${initialPosition.x}%`,
      y: `${initialPosition.y}%`,
    },
    whileHover: {
      scale: 1.1,
      borderRadius: "40%",
      rotate: "-60deg",
    },
    whileTap: {
      scale: 0.8,
      borderRadius: "20%",
      rotate: "90deg",
    },
  };

  return <BlobElement {...animation}></BlobElement>;
};

export default Blob;
