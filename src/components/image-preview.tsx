import { useImageStateContext } from "../stores/image";

export function ImagePreview() {
  const { getImageStateAsURL } = useImageStateContext();

  return <img className="h-12" src={getImageStateAsURL()} alt="badge" />;
}
