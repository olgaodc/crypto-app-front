import styled from "styled-components";
import { Button } from "antd";

export const PrimaryButton = styled(Button)`
    background-color: #fca311;
    border: 0;
    box-shadow: none;
    font-family: 'Inter', sans-serif;
    transition: 0.5s;

     &.ant-btn.ant-btn-primary:hover {
        background-color: #fca311e3;
    }

    span {
        color: #fefefe;
        font-weight: 600;
    }
`;