import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ImageFields } from "../../context/ImageFields";
import useImageFields from "../../hooks/ImageFields";
import TextInput from "../TextInput";

const Inputs: React.FC = () => {
  const [label, setLabel] = useState("TYPESCRIPT");
  const [message, setMessage] = useState("TS");
  const [logo, setLogo] = useState("TYPESCRIPT");

  const { saveImageFields } = useImageFields();

  const onChangeLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const onChangeLogo = (e: ChangeEvent<HTMLInputElement>) => {
    setLogo(e.currentTarget.value);
  };

  useEffect(() => {
    saveImageFields({ label, message, logo });
  }, [label, message, logo]);

  return (
    <>
      <TextInput value={label} onChange={onChangeLabel} name="Label" />
      <TextInput value={message} onChange={onChangeMessage} name="Message" />
      <TextInput value={logo} onChange={onChangeLogo} name="Tech" />
    </>
  );
};

export default Inputs;
