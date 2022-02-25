import React, { useEffect, useState } from "react";
import { Box, Label } from "./styles";
import { HexColorInput, HexColorPicker } from "react-colorful";
import useImageColor from "../../hooks/Color";
import { ColorStrings } from "../../context/Color";

function colorObject(label: string, message: string, logo: string) {
  const colors = [label, message, logo];
  const treatedStrings = colors.map((color) => color.replace("#", ""));
  const colorStringsObject: ColorStrings = {
    labelColor: treatedStrings[0],
    messageColor: treatedStrings[1],
    logoColor: treatedStrings[2],
  };
  return colorStringsObject;
}

const ColorPickers: React.FC = () => {
  const [hexColorLabel, setHexColorLabel] = useState("#07a0f8");
  const [hexColorMessage, setHexColorMessage] = useState("#000000");
  const [hexColorIcon, setHexColorIcon] = useState("#ffffff");

  const { saveColors } = useImageColor();

  useEffect(() => {
    const colors = colorObject(hexColorLabel, hexColorMessage, hexColorIcon);
    saveColors(colors);
  }, [hexColorLabel, hexColorMessage, hexColorIcon]);

  return (
    <>
      <Box>
        <div>
          <Label htmlFor="label-color-select">Label</Label>
          <HexColorPicker color={hexColorLabel} onChange={setHexColorLabel} />
          <HexColorInput
            className="react-colorful-input"
            id="label-color-select"
            color={hexColorLabel}
            onChange={setHexColorLabel}
          />
        </div>

        <div>
          <Label htmlFor="message-color-select">Message color</Label>
          <HexColorPicker
            color={hexColorMessage}
            onChange={setHexColorMessage}
          />
          <HexColorInput
            className="react-colorful-input"
            id="message-color-select"
            color={hexColorMessage}
            onChange={setHexColorMessage}
          />
        </div>

        <div>
          <Label htmlFor="techlogo-color-select">Tech logo color</Label>
          <HexColorPicker color={hexColorIcon} onChange={setHexColorIcon} />
          <HexColorInput
            className="react-colorful-input"
            id="techlogo-color-select"
            color={hexColorIcon}
            onChange={setHexColorIcon}
          />
        </div>
      </Box>
    </>
  );
};

export default ColorPickers;
