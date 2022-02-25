import React, { createContext, ReactChild, useContext, useState } from "react";

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
  saveColors: (newColors: ColorStrings) => void;
};

const defaultColor: ColorStrings = {
  labelColor: "fff",
  messageColor: "0b5ef7",
  logoColor: "000",
};

const ColorContext = createContext<ColorContextType>({} as ColorContextType);

function ColorProvider({ children, imageColors }: ColorProviderProps) {
  const [colors, setColors] = useState<ColorStrings>(
    imageColors || defaultColor,
  );

  function saveColors(newColors: ColorStrings) {
    setColors(newColors);
  }

  return (
    <ColorContext.Provider value={{ imageColors: colors, saveColors }}>
      {children}
    </ColorContext.Provider>
  );
}

// * Podemos retornar o hook no mesmo arquivo também
const useColors = (): ColorContextType => {
  const context = useContext(ColorContext);
  return context;
};

export { ColorProvider, useColors };
export default ColorContext;
