import React, { useEffect, useState } from "react";
import { Box, Label } from "./styles";
import { HexColorPicker } from "react-colorful";

const ColorPicker: React.FC = () => {
  const [hexColorLabel, setHexColorLabel] = useState("#babaca");
  const [hexColorMessage, setHexColorMessage] = useState("#babaca");
  const [hexColorIcon, setHexColorIcon] = useState("#babaca");

  return (
    <>
      <Box>
        <div>
          <Label htmlFor="label-color-select">Label</Label>
          <HexColorPicker
            id="label-color-select"
            color={hexColorLabel}
            onChange={setHexColorLabel}
          />
        </div>

        <div>
          <Label htmlFor="message-color-select">Message color</Label>
          <HexColorPicker
            id="message-color-select"
            color={hexColorMessage}
            onChange={setHexColorMessage}
          />
        </div>

        <div>
          <Label htmlFor="techlogo-color-select">Tech logo color</Label>
          <HexColorPicker
            id="techlogo-color-select"
            color={hexColorIcon}
            onChange={setHexColorIcon}
          />
        </div>
      </Box>
    </>
  );
};

export default ColorPicker;
