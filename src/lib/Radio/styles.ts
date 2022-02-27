import styled from "styled-components";

export const RadioContainer = styled.div`
  --radio-radius: 1.2rem;
  position: relative;
  height: 5rem;
  width: 5rem;
  border-radius: var(--radio-radius);
  background: var(--deactivated);
`;

export const RadioLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--typo);
  text-transform: uppercase;
  font-weight: 800;
  color: white;
  text-align: center;
  border-radius: var(--radio-radius);
  width: 100%;
  height: 100%;
`;

export const RadioButton = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;
  :checked ~ ${RadioLabel} {
    background: var(--secondary-darker);
  }
`;
