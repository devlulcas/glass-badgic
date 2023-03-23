import { badgeStyles, useImageStateContext } from "../stores/image";
import { Button } from "./button";

export function BadgeStylesSelector() {
  const { updateFormat } = useImageStateContext();

  return (
    <div className="flex gap-1">
      <Button
        onClick={() => {
          updateFormat(badgeStyles.plastic);
        }}
      >
        PLASTIC
      </Button>

      <Button
        onClick={() => {
          updateFormat(badgeStyles.flat);
        }}
      >
        FLAT
      </Button>

      <Button
        onClick={() => {
          updateFormat(badgeStyles.flatSquare);
        }}
      >
        FLAT SQUARE
      </Button>

      <Button
        onClick={() => {
          updateFormat(badgeStyles.square);
        }}
      >
        SQUARE
      </Button>

      <Button
        onClick={() => {
          updateFormat(badgeStyles.social);
        }}
      >
        SOCIAL
      </Button>
    </div>
  );
}
