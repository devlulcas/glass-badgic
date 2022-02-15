import styled from "styled-components";
import { motion } from "framer-motion";

export const TextInputContainer = styled(motion.div)`
  width: 80%;
  font-family: "Inter", sans-serif;

  label {
    display: block;
    color: var(--on-primary);
    font-size: 2.5rem;
    font-weight: 700;
    margin-left: 1rem;
  }

  input {
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    border-bottom: 0.2rem solid var(--secondary) !important;
    width: 100%;
    font-size: 2rem;
    color: var(--on-secondary);
    background: var(--white-transparent);

    &:focus {
      outline: 0.1rem solid var(--secondary);
    }
  }
`;
