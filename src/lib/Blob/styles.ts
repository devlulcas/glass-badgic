import styled from "styled-components";
import { motion } from "framer-motion";

export const BlobElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(
    30deg,
    var(--start-gradient),
    var(--end-gradient)
  );
`;
