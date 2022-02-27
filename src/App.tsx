import Container from "./lib/Container";
import ImagePreview from "./lib/ImagePreview";
import ColorPickers from "./lib/ColorPickers";
import CopyToClipboard from "./lib/CopyToClipboard";
import { ColorProvider, defaultColor } from "./context/Color";
import { defaultImageFields, ImageFieldsProvider } from "./context/ImageFields";
import { FlexContainer, BlockContainer } from "./lib/GenericStyledComponentes";
import Inputs from "./lib/Inputs";
import StyleOptions from "./lib/StyleOptions";
import { BadgeStyleProvider, defaultImageStyle } from "./context/BadgeStyle";
import { ImageUrlProvider, defaultImageUrl } from "./context/ImageUrl";

function App() {
  return (
    <ColorProvider imageColors={defaultColor}>
      <ImageFieldsProvider imageFields={defaultImageFields}>
        <BadgeStyleProvider imageStyle={defaultImageStyle}>
          <ImageUrlProvider imageUrl={defaultImageUrl}>
            <Container>
              <Inputs />
              <ImagePreview />
              <FlexContainer>
                <ColorPickers />
                <BlockContainer>
                  <StyleOptions />
                  <CopyToClipboard />
                </BlockContainer>
              </FlexContainer>
            </Container>
          </ImageUrlProvider>
        </BadgeStyleProvider>
      </ImageFieldsProvider>
    </ColorProvider>
  );
}

export default App;
