import { createContext, useContext, useReducer } from "react";
import { imageStateReducer, IMAGE_STATE_ACTIONS } from "./image.reducer";

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

export type ImageProviderActions = {
  updateLabel: (payload: ImageComponent) => void;
  updateMessage: (payload: ImageComponent) => void;
  updateTech: (payload: ImageComponent) => void;
  updateFormat: (payload: string) => void;
  getImageStateAsURL: () => string;
};

const defaultImageState: ImageState = {
  label: {
    text: "Label",
    color: "000000",
  },
  message: {
    text: "Message",
    color: "ffffff",
  },
  tech: {
    text: "Tech",
    color: "ffffff",
  },
  format: "flat",
};

const imageStateContext = createContext<ImageState & ImageProviderActions>(
  defaultImageState as ImageState & ImageProviderActions
);

export function useImageStateContext() {
  const context = useContext(imageStateContext);

  if (!context) {
    throw new Error(
      "useImageStateContext must be used within a ImageStateProvider"
    );
  }

  return context;
}

type ImageStateProvider = {
  children: React.ReactNode;
};

function useImageReducer() {
  const [state, dispatch] = useReducer(imageStateReducer, defaultImageState);

  return {
    state,
    updateLabel: (payload: ImageComponent) => {
      dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_LABEL, payload });
    },
    updateMessage: (payload: ImageComponent) => {
      dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_MESSAGE, payload });
    },
    updateTech: (payload: ImageComponent) => {
      dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_TECH, payload });
    },
    updateFormat: (payload: string) => {
      dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_FORMAT, payload });
    },
  };
}

export function ImageStateProvider({ children }: ImageStateProvider) {
  const { state, ...actions } = useImageReducer();

  const getImageStateAsURL = () => {
    const { label, message, tech, format } = state;

    const params = new URLSearchParams({
      label: label.text,
      message: message.text,
      color: message.color,
      style: format,
      logo: tech.text,
    });

    const url = new URL("https://img.shields.io");

    url.search = params.toString();

    return url.toString();
  };

  const value = {
    ...state,
    ...actions,
    getImageStateAsURL,
  };

  return (
    <imageStateContext.Provider value={value}>
      {children}
    </imageStateContext.Provider>
  );
}
