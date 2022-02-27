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
  return (
    <Button onClick={onClick}>
      {children}
      <Icon src={src} alt={alt} />
    </Button>
  );
};

export default IconButton;
