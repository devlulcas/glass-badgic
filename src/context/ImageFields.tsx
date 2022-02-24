import React, { createContext, ReactChild, useState } from "react";

export type ImageFields = {
  label: string;
  message: string;
  logo: string;
};

type ImageFieldsProviderProps = {
  children: ReactChild;
  imageFields: ImageFields;
};

type ImageFieldsContextType = {
  imageFields: ImageFields;
  saveImageFields?: (newImageFields: ImageFields) => void;
};

const defaultImageFields: ImageFields = {
  label: "TS",
  message: "REACT",
  logo: "TYPESCRIPT",
};

const ImageFieldsContext = createContext<ImageFieldsContextType>({
  imageFields: defaultImageFields,
});

function ImageFieldsProvider({
  children,
  imageFields,
}: ImageFieldsProviderProps) {
  const [fields, setImageFields] = useState(imageFields || defaultImageFields);

  function saveImageFields(newImageFields: ImageFields) {
    setImageFields(newImageFields);
  }

  return (
    <ImageFieldsContext.Provider
      value={{ imageFields: fields, saveImageFields }}>
      {children}
    </ImageFieldsContext.Provider>
  );
}

const ImageFieldsConsumer = ImageFieldsContext.Consumer;
export { ImageFieldsProvider, ImageFieldsConsumer };
export default ImageFieldsContext;
