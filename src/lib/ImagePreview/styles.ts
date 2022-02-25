import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  width: 25%;
  margin: 2rem;
  img {
    width: 100%;
  }
  @media (max-width: 1480px) {
    width: 79%;
  }
`;
