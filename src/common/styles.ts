import styled from "styled-components";
import { device } from "./breakpoints";

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