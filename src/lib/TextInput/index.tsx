import React, { HTMLProps } from "react";
import { TextInputContainer } from "./styles";

interface ITextInputProps {
  name: string;
}

type Props = ITextInputProps & JSX.IntrinsicElements["input"];

const TextInput: React.FC<Props> = ({ name, onChange }) => {
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
      <input onChange={onChange} type="text" id={name} name={name} />
    </TextInputContainer>
  );
};

export default TextInput;
