import React, { ChangeEvent, useEffect, useState } from "react";
import { useBadgeStyle } from "../../hooks/BadgeStyle";
import Radio from "../Radio";
import { OptionsContainer } from "./styles";

const StyleOptions: React.FC = () => {
  const [selected, setSelected] = useState("flat-square");

  const { saveStyle } = useBadgeStyle();

  useEffect(() => {
    saveStyle(selected);
  }, [selected]);

  const onChangeSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <OptionsContainer>
      <Radio
        onChangeHandler={onChangeSelection}
        checked={selected == "plastic"}
        name="style-option"
        value="plastic"
      />

      <Radio
        onChangeHandler={onChangeSelection}
        checked={selected == "flat"}
        name="style-option"
        value="flat"
      />

      <Radio
        onChangeHandler={onChangeSelection}
        checked={selected == "flat-square"}
        name="style-option"
        value="flat-square"
        content="flat square"
      />

      <Radio
        onChangeHandler={onChangeSelection}
        checked={selected == "square"}
        name="style-option"
        value="square"
      />

      <Radio
        onChangeHandler={onChangeSelection}
        checked={selected == "social"}
        name="style-option"
        value="social"
      />
    </OptionsContainer>
  );
};

export default StyleOptions;
