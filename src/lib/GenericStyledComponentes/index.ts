import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1480px) {
    flex-direction: column;
  }
`;

export const BlockContainer = styled.div`
  display: block;
`;
