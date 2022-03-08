import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const Container = styled.div`
    background-color: var(--Iris-100);
    grid-row: 1 / 7;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media only screen and (${device.sm}){
        grid-row: 1 / 16;
        grid-column: 1 / 4;
    }

`