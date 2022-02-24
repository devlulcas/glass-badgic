import { useState } from "react";
import Container from "./lib/Container";
import TextInput from "./lib/TextInput";
import ImagePreview from "./lib/ImagePreview";
import ColorPicker from "./lib/ColorPicker";
import { ColorProvider, ColorStrings } from "./context/Color";
import { ImageFieldsProvider } from "./context/ImageFields";

function App() {
  const defaultColor: ColorStrings = {
    labelColor: "fff",
    messageColor: "0b5ef7",
    logoColor: "000",
  };

  const defaultImageFields = {
    label: "TS",
    message: "REACT",
    logo: "TYPESCRIPT",
  };
  return (
    <ColorProvider imageColors={defaultColor}>
      <ImageFieldsProvider imageFields={defaultImageFields}>
        <Container>
          <TextInput name="Label"></TextInput>
          <TextInput name="Message"></TextInput>
          <TextInput name="Tech"></TextInput>
          <ImagePreview></ImagePreview>
          <ColorPicker></ColorPicker>
        </Container>
      </ImageFieldsProvider>
    </ColorProvider>
  );
}

export default App;
