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
    const params = new URLSearchParams({
      label: state.label.text,
      labelColor: state.label.color,
      message: state.message.text,
      color: state.message.color,
      style: state.format,
      logo: state.tech.text,
      logoColor: state.tech.color,
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

