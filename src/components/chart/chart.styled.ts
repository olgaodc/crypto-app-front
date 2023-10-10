import styled from "styled-components";

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: center;

    .cryptoName {
        font-size: 32px;
        font-weight: 500;
        color: #AD7ED6;
        text-align: center;
        margin: 0;

        @media (width <= 576px) {
            font-size: 20px;
        }
    }

    canvas {
        max-height: 400px;

        @media (width <= 576px) {
            max-height: 300px;
        }
    }

`;

export const DesktopChart = styled.div`
    background-color: #1B1C2F;
    padding: 30px;
    border-radius: 8px;
    width: 80%;  

    @media (width <= 892px) {
        width: 100%;
    }

    @media (width <= 576px) {
        display: none;
    }
`;

export const MobileChart = styled.div`
    display: none;

    @media (width <= 576px) {
        display: block;
        width: 100%;
    }
`;