import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.3em;
  border: 1px solid var(--Grey);
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: var(--Iris-50);
    cursor: pointer;
  }
`;
