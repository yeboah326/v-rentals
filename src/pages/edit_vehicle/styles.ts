import styled from "styled-components";
import { device } from "../../common/breakpoints";

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
