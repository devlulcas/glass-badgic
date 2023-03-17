import { imageStateContext } from "./image.context";
import {
  useImageReducer
} from "./image.reducer";

type ImageStateProvider = {
  children: React.ReactNode;
};

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

    const url = new URL("https://img.shields.io/static/v1");

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
