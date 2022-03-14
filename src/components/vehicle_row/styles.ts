import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem 2rem;
  border: 1px solid;
  border-color: var(--Grey);
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: var(--Iris-50);
    color: white;
    cursor: pointer;
  }
`;
