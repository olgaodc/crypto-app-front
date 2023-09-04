import styled from "styled-components";

export const HeroBoxWrapper = styled.div`
    min-height: calc(100vh - 192px);
`;

export const HeroBox = styled.div`
    width: 100%;
    margin: 60px 0;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 44px;
    font-weight: 600;
    text-align: center;
    color: #fca311;
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 30px;
`;

export const Image = styled.img`
    max-width: 360px;
    /* height: 100%;
    object-fit: contain; */
    display: block;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
`;

export const Description = styled.p`
    margin: 0;
    line-height: 140%;
    max-width: 480px;
`;