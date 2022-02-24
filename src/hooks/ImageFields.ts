import { useContext } from "react";
import ImageFieldsContext from "../context/ImageFields";

export default function useImageFields() {
  return useContext(ImageFieldsContext);
}
