import { useContext } from "react";
import ImageUrlContext from "../context/ImageUrl";

export function useImageUrl() {
  return useContext(ImageUrlContext)
}