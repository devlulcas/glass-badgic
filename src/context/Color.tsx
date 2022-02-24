import React, { createContext, ReactChild, useState } from "react";

export type ColorStrings = {
  labelColor: string;
  messageColor: string;
  logoColor: string;
};

type ColorProviderProps = {
  children: ReactChild;
  imageColors: ColorStrings;
};

type ColorContextType = {
  imageColors: ColorStrings;
  saveColors?: (newColors: ColorStrings) => void;
};

const defaultColor: ColorStrings = {
  labelColor: "fff",
  messageColor: "0b5ef7",
  logoColor: "000",
};

const ColorContext = createContext<ColorContextType>({
  imageColors: defaultColor,
});

function ColorProvider({ children, imageColors }: ColorProviderProps) {
  const [colors, setColors] = useState(imageColors || defaultColor);

  function saveColors(newColors: ColorStrings) {
    setColors(newColors);
  }

  return (
    <ColorContext.Provider value={{ imageColors: colors, saveColors }}>
      {children}
    </ColorContext.Provider>
  );
}

const ColorConsumer = ColorContext.Consumer;
export { ColorProvider, ColorConsumer };
export default ColorContext;
