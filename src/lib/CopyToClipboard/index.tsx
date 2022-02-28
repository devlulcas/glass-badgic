import IconButton from "../IconButton";
import { Container } from "./styles";

import md from "../../../public/assets/images/svgs/markdown.svg";
import html from "../../../public/assets/images/svgs/html.svg";
import link from "../../../public/assets/images/svgs/link.svg";
import { useImageUrl } from "../../hooks/ImageUrl";
import { copyText } from "../../utils/CopyToClipboard";
import useImageFields from "../../hooks/ImageFields";
import { safeUrl } from "../../utils/Url";

const CopyToClipboard = () => {
  const { imageUrl } = useImageUrl();
  const { imageFields } = useImageFields();

  const url = safeUrl(imageUrl.imageUrl);
  const alt = imageFields.logo;

  const urlAsImage = `<img src="${url}" alt="${alt}"/>`;
  const urlAsMd = `![${alt}](${url})`;

  return (
    <Container>
      <IconButton src={md} alt="markdown" onClick={() => copyText(urlAsMd)}>
        Copy as Markdown image
      </IconButton>

      <IconButton src={html} alt="html" onClick={() => copyText(urlAsImage)}>
        Copy as HTML image
      </IconButton>

      <IconButton src={link} alt="url" onClick={() => copyText(url)}>
        Copy as URL
      </IconButton>
    </Container>
  );
};

export default CopyToClipboard;
