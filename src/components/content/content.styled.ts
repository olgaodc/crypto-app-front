import styled from "styled-components";

export const ContentWrapper = styled.div`
    min-height: calc(100vh - 192px);
`;

export const Content = styled.div`
    width: 100%;
    margin: 60px 0;
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 30px;
`;

export const Image = styled.img`
    max-width: 420px;
    /* width: 35%; */
    display: block;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 500px;
    /* align-items: center; */
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 66px;
    font-weight: 400;
    /* text-align: center; */
    color: #fca311;
    font-family: 'Noto Sans NKo Unjoined', sans-serif;
`;

export const Description = styled.p`
    margin: 0;
    line-height: 145%;
    max-width: 480px;
`;