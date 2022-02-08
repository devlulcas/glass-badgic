import React from "react";
import { DivFullScreen } from "./styles";
import Blob from "../Blob";

// const NomeDoComponente: Tipo = arrowFunction
const Container: React.FC = (props) => {
  return (
    <DivFullScreen>
      <main>{props.children}</main>
      <Blob initialPosition={{ x: -150, y: -60 }} />
      <Blob initialPosition={{ x: 125, y: 10 }} />
      <Blob initialPosition={{ x: -55, y: 80 }} />
    </DivFullScreen>
  );
};

export default Container;
