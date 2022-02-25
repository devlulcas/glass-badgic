import IconButton from "../IconButton";
import { Container } from "./styles";

import md from "../../assets/images/svgs/markdown.svg";
import html from "../../assets/images/svgs/html.svg";
import link from "../../assets/images/svgs/link.svg";

const CopyToClipboard = () => {
  return (
    <Container>
      <IconButton src={md} alt="markdown" onClick={() => console.log("MKD")}>
        Copy as Markdown image
      </IconButton>
      
      <IconButton src={html} alt="html" onClick={() => console.log("IMG")}>
        Copy as HTML image
      </IconButton>

      <IconButton src={link} alt="url" onClick={() => console.log("URL")}>
        Copy as URL
      </IconButton>
    </Container>
  );
};

export default CopyToClipboard;
