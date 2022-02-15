import React, { useState, MouseEvent, useRef } from "react";
import { Box, Picker, HueBar } from "./styles";

const ColorPicker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const offsetRef = useRef(null);

  function getMousePosition(event: MouseEvent) {
    setPosition({
      x: event.clientX - offsetRef.current.offsetLeft * 2,
      y: event.clientY - offsetRef.current.offsetTop / 2,
    });

    console.log(position);
  }

  return (
    <>
      <Box onClick={getMousePosition}>
        <Picker
          ref={offsetRef}
          style={{ x: position.x + "px", y: position.y + "px" }}
        ></Picker>
      </Box>
      <h1>{position.x + " - " + position.y}</h1>
      <h1>{window.innerWidth + " - " + window.innerHeight}</h1>

      <HueBar type="range"></HueBar>
    </>
  );
};

export default ColorPicker;
