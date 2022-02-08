import { useState } from "react";
import Container from "./lib/Container";
import TextInput from "./lib/TextInput";
import ImagePreview from "./lib/ImagePreview";
import ColorPicker from "./lib/ColorPicker";

function App() {
  return (
    <Container>
      <TextInput name="Label"></TextInput>
      <TextInput name="Message"></TextInput>
      <TextInput name="Tech"></TextInput>
      <ImagePreview></ImagePreview>
      <ColorPicker></ColorPicker>
    </Container>
  );
}

export default App;
