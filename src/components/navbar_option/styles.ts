import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
  padding: 1rem 0 1rem 0.5rem;
  border-radius: 2rem;
  font-family: "Comfortaa";

  &:hover{
    cursor: pointer;
    background-color: white!important;
    color: var(--Iris-100)!important;
  }
`;

export const TextDescription = styled.div``;

export const Icon = styled.div`
  font-size: 1.7rem;
`;