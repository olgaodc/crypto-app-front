import styled from "styled-components";

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: center;
    

    div {
        background-color: #1B1C2F;
        /* background-color: violet; */
        padding: 30px;
        border-radius: 20px;
        /* z-index: 0; */
        width: 80%;
        /* position: relative; */
        

        @media (width <= 892px) {
            width: 100%;
        }

        @media (width <= 576px) {
            padding: 15px;
        }
    }

    .cryptoName {
        /* position: absolute;
        top: 60px;
        left: 130px; */
        font-size: 32px;
        font-weight: 500;
        color: #AD7ED6;
        text-align: center;
        margin: 0;
    }

    canvas {
        max-height: 400px;
    }

`;