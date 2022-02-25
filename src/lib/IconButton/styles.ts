import styled from "styled-components";

export const Button = styled.button`
  min-width: 28rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2rem;
  font-family: var(--typo);
  font-weight: 800;
  font-size: 1.5rem;
  background: var(--secondary);
  color: var(--secondary-darker);
  box-shadow: 0.1rem 0.1rem 0.4rem;
  cursor: pointer;
  transition: all 200ms ease;

  :active {
    background: var(--secondary-darker);
    color: var(--secondary);
  }

  :hover {
    filter: saturate(125%);
  }
`;

export const Icon = styled.img`
  margin-left: 1rem;
  height: 2rem;
`;
