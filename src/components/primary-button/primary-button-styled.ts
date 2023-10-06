import styled from "styled-components";
import { Button } from "antd";

export const PrimaryButton = styled(Button)`
    background-color: #1cb073;
    border: 0;
    box-shadow: none;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    height: unset;
    padding: 8px 26px;
    color: #fefefe;
    font-weight: 500;
    transition: 0.5s;

     &.ant-btn.ant-btn-primary:hover {
        background-color: #1cb073a6;
    }
`;