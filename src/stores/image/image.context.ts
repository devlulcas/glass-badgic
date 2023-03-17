import { createContext, useContext } from "react";
import { ImageReducer } from "./image.reducer";

export type ImageComponent = {
  text: string;
  color: string;
};

export type ImageState = {
  label: ImageComponent;
  message: ImageComponent;
  tech: ImageComponent;
  format: string;
};

export type ImageProviderActions = ImageReducer & {
  getImageStateAsURL: () => string;
};

export const defaultImageState: ImageState = {
  label: {
    text: "Label",
    color: "000000",
  },
  message: {
    text: "Message",
    color: "ffffff",
  },
  tech: {
    text: "typescript",
    color: "ffffff",
  },
  format: "for-the-badge",
};

export const imageStateContext = createContext<
  ImageState & ImageProviderActions
>(defaultImageState as ImageState & ImageProviderActions);

export function useImageStateContext() {
  const context = useContext(imageStateContext);

  if (!context) {
    throw new Error(
      "useImageStateContext must be used within a ImageStateProvider"
    );
  }

  return context;
}
