import { styled } from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 10px 0;
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
    font-weight: 600;
    font-size: 18px;
    color: #5A72B1;
`;

export const Navbar = styled.ul`
    margin: 0;
    padding: 0;
`;

export const NavbarItem = styled.li`
    list-style-type: none;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #5A72B1;
`;