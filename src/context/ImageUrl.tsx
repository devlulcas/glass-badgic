import { createContext, ReactChild, useState } from "react";

type ImageUrl = {
  imageUrl: string;
};

type ImageUrlProps = {
  imageUrl: ImageUrl;
  children?: ReactChild;
};

type ImageUrlContextType = {
  imageUrl: ImageUrl;
  saveImageUrl: (newImageUrl: ImageUrl) => void;
};

const ImageUrlContext = createContext({} as ImageUrlContextType);

export const defaultImageUrl: ImageUrl = {
  imageUrl:
    "https://img.shields.io/static/v1?label=TYPESCRIPT&labelColor=07a0f8&message=TS&color=000000&logo=TYPESCRIPT&logoColor=ffffff&style=flat-square",
};

function ImageUrlProvider({ children, imageUrl }: ImageUrlProps) {
  const [url, setImageUrl] = useState(imageUrl || defaultImageUrl);

  function saveImageUrl(newImageUrl: ImageUrl) {
    setImageUrl(newImageUrl);
  }

  return (
    <ImageUrlContext.Provider value={{ imageUrl: url, saveImageUrl }}>
      {children}
    </ImageUrlContext.Provider>
  );
}

export { ImageUrlProvider };
export default ImageUrlContext;
