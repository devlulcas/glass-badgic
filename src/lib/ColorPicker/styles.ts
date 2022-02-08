import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled.div`
  width: 30%;
  height: 20rem;
  background: linear-gradient(to top, rgb(0, 0, 0), transparent),
    linear-gradient(to left, rgb(96, 0, 255), rgb(255, 255, 255));
  border-radius: 1rem;
`;

export const Picker = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0.1rem solid var(--on-secondary);
  outline: 0.1rem solid var(--on-primary);
  cursor: pointer;
`;

export const HueBar = styled.input`
  width: 30%;
  height: 1rem;
`;
