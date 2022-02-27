import styled from "styled-components";

export const Box = styled.picture`
  height: 5%;
  width: 25%;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 5rem;
  }

  @media (max-width: 1480px) {
    width: 79%;
    height: 15%;
  }
`;
