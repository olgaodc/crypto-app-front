import { styled } from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 15px 0;
`;

export const LogoWrapper = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Image = styled.img`
    width: 45px;
`;

export const LogoText = styled.span`
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    color: #8bbce9;
`;