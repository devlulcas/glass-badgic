import { createContext, ReactChild, useState } from "react";

type BadgeStyleProps = {
  imageStyle: string;
  children?: ReactChild;
};

type BadgeStyleContextType = {
  imageStyle: string;
  saveStyle: (style: string) => void;
};

export const defaultImageStyle = "for-the-badge";

const BadgeStyleContext = createContext({} as BadgeStyleContextType);

function BadgeStyleProvider({ imageStyle, children }: BadgeStyleProps) {
  const [badgeStyle, setBadgeStyle] = useState<string>(
    imageStyle || defaultImageStyle
  );

  function saveStyle(newStyle: string) {
    setBadgeStyle(newStyle);
  }

  return (
    <BadgeStyleContext.Provider value={{ imageStyle: badgeStyle, saveStyle }}>
      {children}
    </BadgeStyleContext.Provider>
  );
}

export { BadgeStyleProvider };
export default BadgeStyleContext;
