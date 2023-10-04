import styled from "styled-components";

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: center;
    

    div {
        background-color: #1B1C2F;
        padding: 30px;
        border-radius: 20px;
        width: 80%;        

        @media (width <= 892px) {
            width: 100%;
        }

        @media (width <= 576px) {
            padding: 15px;
        }
    }

    .cryptoName {
        font-size: 32px;
        font-weight: 500;
        color: #AD7ED6;
        text-align: center;
        margin: 0;

        @media (width <= 576px) {
            font-size: 22px;
        }
    }

    canvas {
        max-height: 400px;

        @media (width <= 576px) {
            max-height: 350px;
        }
    }

`;