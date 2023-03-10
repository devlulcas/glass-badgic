import { createContext, useContext, useReducer } from "react";

type ImageComponent = {
  text: string;
  color: string;
};

type ImageState = {
  label: ImageComponent;
  message: ImageComponent;
  tech: ImageComponent;
  format: string;
};

type ImageProviderActions = {
  updateLabel: (payload: ImageComponent) => void;
  updateMessage: (payload: ImageComponent) => void;
  updateTech: (payload: ImageComponent) => void;
  updateFormat: (payload: string) => void;
  getImageStateAsURL: () => string;
};

const defaultImageState: ImageState = {
  label: {
    text: "Label",
    color: "#000000",
  },
  message: {
    text: "Message",
    color: "#ffffff",
  },
  tech: {
    text: "Tech",
    color: "#ffffff",
  },
  format: "flat",
};

const imageStateContext = createContext<ImageState & ImageProviderActions>(
  defaultImageState as ImageState & ImageProviderActions,
);

export function useImageStateContext() {
  const context = useContext(imageStateContext);

  if (context === undefined) {
    throw new Error(
      "useImageStateContext must be used within a ImageStateProvider",
    );
  }

  return context;
}

type ImageStateProvider = {
  children: React.ReactNode;
};

export function ImageStateProvider({ children }: ImageStateProvider) {
  const [state, dispatch] = useReducer(imageStateReducer, defaultImageState);

  const updateLabel = (payload: ImageComponent) => {
    dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_LABEL, payload });
  };

  const updateMessage = (payload: ImageComponent) => {
    dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_MESSAGE, payload });
  };

  const updateTech = (payload: ImageComponent) => {
    dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_TECH, payload });
  };

  const updateFormat = (payload: string) => {
    dispatch({ type: IMAGE_STATE_ACTIONS.UPDATE_FORMAT, payload });
  };

  const getImageStateAsURL = () => {
    const { label, message, tech, format } = state;
    const url = new URL("https://img.shields.io/badge/");
    url.searchParams.append("label", label.text);
    url.searchParams.append("message", message.text);
    url.searchParams.append("color", message.color);
    url.searchParams.append("labelColor", label.color);
    url.searchParams.append("style", format);
    url.searchParams.append("logo", tech.text);
    url.searchParams.append("logoColor", tech.color);
    return url.toString();
  };

  const value = {
    ...state,
    updateLabel,
    updateMessage,
    updateTech,
    updateFormat,
    getImageStateAsURL,
  };

  return (
    <imageStateContext.Provider value={value}>
      {children}
    </imageStateContext.Provider>
  );
}

export const IMAGE_STATE_ACTIONS = {
  UPDATE_LABEL: "updateLabel",
  UPDATE_MESSAGE: "updateMessage",
  UPDATE_TECH: "updateTech",
  UPDATE_FORMAT: "updateFormat",
} as const;

type ImageStateAction =
  typeof IMAGE_STATE_ACTIONS[keyof typeof IMAGE_STATE_ACTIONS];

function imageStateReducer(
  state: ImageState,
  action: { type: ImageStateAction; payload: ImageComponent | string },
) {
  if (typeof action.payload === "string") {
    return {
      ...state,
      format: action.payload,
    };
  }

  switch (action.type) {
    case "updateLabel":
      return {
        ...state,
        label: {
          ...state.label,
          text: action.payload.text,
          color: action.payload.color,
        },
      };
    case "updateMessage":
      return {
        ...state,
        message: {
          ...state.message,
          text: action.payload.text,
          color: action.payload.color,
        },
      };
    case "updateTech":
      return {
        ...state,
        tech: {
          ...state.tech,
          text: action.payload.text,
          color: action.payload.color,
        },
      };
    default:
      return state;
  }
}
