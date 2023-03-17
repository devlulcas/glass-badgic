import { useImageStateContext } from "../stores/image";

export function ImagePreview() {
  const { getImageStateAsURL } = useImageStateContext();

  return (
    <img className="w-1/2 md:w-1/4" src={getImageStateAsURL()} alt="badge" />
  );
}
