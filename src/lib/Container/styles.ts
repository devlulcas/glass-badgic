import styled from "styled-components";
import { motion } from "framer-motion";

export const DivFullScreen = styled(motion.div)`
  background-color: var(--primary);
  display: grid;
  height: 100vh;
  place-items: center;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 1680px) {
    overflow-y: hidden;
  }

  main {
    width: 80%;
    max-width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    z-index: 10;
    backdrop-filter: blur(1rem);
    background: var(--glass-background);
    border: 0.1rem solid var(--white);
    border-radius: 1rem;
    box-shadow: 0 0.4rem 2rem 0 var(--shadow);

    @media (min-width: 1480px) {
      height: 80%;
    }
  }
`;
