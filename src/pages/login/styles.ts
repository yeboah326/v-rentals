import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const Background = styled.div`
    background-color: var(--Iris-100);
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
`;

export const LoginBox = styled.div`
    background-color: white;
    border-radius: 1rem;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    
    @media only screen and (${device.xs}) {
        grid-row: 2 / 15;
        grid-column: 2 / 15;
    }
    
    @media only screen and (${device.sm}) {
        display: grid;
        grid-column: 3 / 14;
        grid-row: 3 / 14;
    }


`;

export const LoginBoxImage = styled.div`
    background-color: var(--Iris-100);
    border-radius: 1rem;
    
    @media only screen and (${device.xs}) {
        display: none;
    }

    @media only screen and (${device.sm}) {
        display: grid;
        grid-column: 2 / 6;
        grid-row: 2 / 15;
    }
    
    @media only screen and (${device.lg}) {
        
    }
`;

export const LoginBoxText = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    height: 100%;
    
    @media only screen and (${device.sm}){
        grid-column: 7 / 15;
        grid-row: 2 / 15;
        padding: 1rem 2rem 0 2rem;
    }
`;

export const WelcomeText = styled.div`
    display: flex;
    font-family: "Abel", serif;
    font-size: 1.5rem;
    gap: 0.4rem;
    margin-bottom: 1rem;
`;

export const LoginText = styled.div`
    font-family: "Comfortaa";
    font-size: 1.2rem;
`;

export const LoginBoxForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;