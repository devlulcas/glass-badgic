import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled.section`
  --radius: 1.2rem;
  --shadow-prop: 0 0 1.2rem var(--shadow);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1480px) {
    gap: 1rem;
  }

  /* Custom layout */
  .react-colorful {
    padding: 1rem 1.5rem;
    width: 95%;
    border-radius: var(--radius) var(--radius) 0 0;
    box-shadow: var(--shadow-prop);
  }

  .react-colorful-input {
    width: 95%;
    font-family: var(--typo);
    background-color: var(--white-transparent);
    padding: 0.4rem;
    text-align: center;
    border-radius: 0 0 var(--radius) var(--radius);
    border: none;
    box-shadow: var(--shadow-prop);
  }

  .react-colorful-input:focus {
    outline: 0.1rem solid var(--secondary-darker);
  }

  .react-colorful__saturation {
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    border-bottom: none;
  }

  .react-colorful__hue {
    order: -1;
  }

  .react-colorful__hue,
  .react-colorful__alpha {
    height: 1.4rem;
    border-radius: 0.5rem;
  }

  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer {
    width: 2rem;
    height: 2rem;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-family: var(--typo);
  text-transform: uppercase;
  font-weight: 800;
`;
