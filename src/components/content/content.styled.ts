import styled from "styled-components";

export const ContentWrapper = styled.div`
    /* min-height: calc(100vh - 272px); */
    margin-bottom: 50px;
`;

export const Content = styled.div`
    width: 100%;
    margin: 90px 0;

    @media (width <= 748px) {
        margin: 40px 0;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (width <= 748px) {
        gap: 15px;
    }
`;

export const Image = styled.img`
    /* max-width: 420px; */
    width: 40%;
    display: block;

    @media (width <= 748px) {
        width: 380px;
    }

    @media (width <= 547px) {
        width: 300px;
    }
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    /* max-width: 500px; */
    width: 55%;
    /* align-items: center; */

    @media (width <= 748px) {
        width: unset;
        max-width: 500px;
        align-items: center;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 66px;
    font-weight: 400;
    /* text-align: center; */
    color: #fca311;
    font-family: 'Noto Sans NKo Unjoined', sans-serif;
    max-width: 600px;

    @media (width <= 992px) {
        font-size: 52px;
    }

    @media (width <= 748px) {
        text-align: center;
    }

    @media (width <= 547px) {
        word-break: break-word;
        font-size: 44px;
    }
`;

export const Description = styled.p`
    margin: 0;
    line-height: 145%;
    font-size: 18px;
    max-width: 600px;
`;