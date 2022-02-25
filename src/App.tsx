import Container from "./lib/Container";
import ImagePreview from "./lib/ImagePreview";
import ColorPickers from "./lib/ColorPickers";
import CopyToClipboard from "./lib/CopyToClipboard";
import { ColorProvider, ColorStrings } from "./context/Color";
import { ImageFields, ImageFieldsProvider } from "./context/ImageFields";
import { FlexContainer } from "./lib/GenericStyledComponentes";
import Inputs from "./lib/Inputs";

const defaultColor: ColorStrings = {
  labelColor: "fff",
  messageColor: "0b5ef7",
  logoColor: "000",
};

const defaultImageFields: ImageFields = {
  label: "TYPESCRIPT",
  message: "REACT",
  logo: "TYPESCRIPT",
};

function App() {
  return (
    <ColorProvider imageColors={defaultColor}>
      <ImageFieldsProvider imageFields={defaultImageFields}>
        <Container>
          <Inputs />
          <ImagePreview />
          <FlexContainer>
            <ColorPickers />
            <CopyToClipboard />
          </FlexContainer>
        </Container>
      </ImageFieldsProvider>
    </ColorProvider>
  );
}

export default App;
