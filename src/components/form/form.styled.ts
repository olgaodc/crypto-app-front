import styled from "styled-components";
import { Form } from 'antd';

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* flex-direction: column;
    align-items: center; */
`;

export const StyledForm = styled(Form)`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    @media (width <= 892px) {
        width: 100%;
    }

    div.ant-form-item, div.ant-picker.ant-picker-range {
        width: 100%;
    }

    .ant-select-arrow {
         color: #1cb073;
    }

    button {
        margin-top: 10px;
    }
`;