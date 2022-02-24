import { useContext } from "react";
import ColorContext from "../context/Color";

export default function useImageColor() {
  return useContext(ColorContext);
}
