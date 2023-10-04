import styled from "styled-components";

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: center;

    div {
        background-color: #292A2D;
        /* background-color: violet; */
        padding: 30px;
        border-radius: 20px;
        /* z-index: 0; */
        width: 80%;

        @media (width <= 892px) {
        width: 100%;
    }
    }


    canvas {
        /* max-width: 800px; */
        z-index: 5;
    }
`;