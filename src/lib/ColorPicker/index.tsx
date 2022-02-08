import React, { useRef, useState } from "react";
import { Coordinates } from "../../types/Coordinates";
import { Box, Picker, HueBar } from "./styles";

function ColorPicker() {
  const constraintRef = useRef(null);

  const positions: Coordinates = {
    x: 10,
    y: 10,
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  function getMousePosition(event) {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });

    console.log(position);
  }


  return (
    <>
      <Box onClick={getMousePosition} ref={constraintRef}>
        <Picker style={{ ...position }}></Picker>
      </Box>
      <HueBar type="range"></HueBar>
    </>
  );
}

export default ColorPicker;
