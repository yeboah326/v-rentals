import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const Background = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 100%;
    height: 100vh;
    
    @media only screen and (${device.sm}){
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(15, 1fr);
    }
`

export const Container = styled.div`
  background-color: white;
  grid-row: 1 / 7;
  grid-column: 2 / 7;
  padding: 5rem 1rem 2rem 1rem;

  @media only screen and (${device.sm}) {
    grid-row: 1 / 16;
    grid-column: 4 / 16;
  }
`;

export const DashboardCard = styled.div`
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
