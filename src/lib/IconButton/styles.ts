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
  background: var(--white-transparent);
  color: var(--secondary-darker);
  cursor: pointer;
  transition: all 200ms ease;

  :hover {
    filter: contrast(1.3);
  }

  :active {
    background: var(--secondary);
    color: var(--secondary-darker);
    filter: contrast(1);
  }
`;

export const Icon = styled.img`
  margin-left: 1rem;
  height: 2rem;
`;
