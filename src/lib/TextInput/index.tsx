import React from "react";
import { TextInputContainer } from "./styles";

interface ITextInputProps {
  name: string;
}

const TextInput: React.FC<ITextInputProps> = ({ name }) => {
  const appear = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <TextInputContainer {...appear}>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} name={name} />
    </TextInputContainer>
  );
};

export default TextInput;
