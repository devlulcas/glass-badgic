import { ReactChild } from "react";
import { Button, Icon } from "./styles";

type IconButtonProps = {
  children?: ReactChild;
  src: string;
  alt: string;
} & JSX.IntrinsicElements["button"] &
  JSX.IntrinsicElements["img"];

const IconButton: React.FC<IconButtonProps> = ({
  children,
  src,
  alt,
  onClick,
}) => {

  const base = import.meta.env.BASE_URL

  return (
    <Button onClick={onClick}>
      {children}
      <Icon src={src} alt={base + alt} />
    </Button>
  );
};

export default IconButton;
