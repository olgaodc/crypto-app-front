import styled from "styled-components";
import { Button } from "antd";

export const PrimaryButton = styled(Button)`
    background-color: #1cb073;
    border: 0;
    box-shadow: none;
    font-family: 'Inter', sans-serif;
    width: 80px;
    transition: 0.5s;

     &.ant-btn.ant-btn-primary:hover {
        background-color: #1cb073a6;
    }

    span {
        color: #fefefe;
        font-weight: 600;
    }
`;