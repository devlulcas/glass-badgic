import React, { ChangeEventHandler } from "react";
import { RadioButton, RadioContainer, RadioLabel } from "./styles";

type RadioProps = {
  name: string;
  content?: string | number;
  value: string | number;
  onChangeHandler: ChangeEventHandler;
} & React.HTMLProps<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({
  name,
  value,
  checked,
  content,
  onChangeHandler,
}) => {
  const id = value.toString().trim();
  return (
    <RadioContainer>
      <RadioButton
        onChange={onChangeHandler}
        type="radio"
        checked={checked}
        id={id}
        name={name}
        value={value}
      />
      <RadioLabel htmlFor={id}>{content || value}</RadioLabel>
    </RadioContainer>
  );
};

export default Radio;
