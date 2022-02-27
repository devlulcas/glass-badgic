import { useContext } from "react";
import BadgeStyleContext from "../context/BadgeStyle";

export function useBadgeStyle() {
  return useContext(BadgeStyleContext);
}
