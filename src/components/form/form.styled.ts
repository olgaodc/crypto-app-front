import styled from "styled-components";
import { Form } from 'antd';

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 60px;
`;

export const FormTitle = styled.div`
    font-size: 46px;
    font-weight: 600;
    margin: 0 0 35px;
    text-align: center;
    word-break: break-word;

    @media (width <= 547px) {
        font-size: 40px;
    }

    span {
        color: #1cb073;
    }
`;



export const StyledForm = styled(Form)`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (width <= 892px) {
        width: 80%;
    }

    @media (width <= 547px) {
        width: 100%;
    }

    div.ant-form-item, div.ant-picker.ant-picker-range {
        width: 100%;
    }

    .ant-select-arrow {
        color: #1cb073;
    }

    button {
        margin: 10px 0;
    }

    .errorMessage {
        color: #dc4446;
        font-size: 16px;
    }
`;