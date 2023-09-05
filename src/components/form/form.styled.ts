import styled from "styled-components";
import { Form } from 'antd';

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const StyledForm = styled(Form)`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
    margin-bottom: 50px;

    @media (width <= 892px) {
        width: 100%;
    }

    div.ant-form-item {
        width: 100%;
        

        div.ant-form-item-control-input-content {
            .ant-select {
                .ant-select-selector {
                    border: 1px solid #2b2c2f !important;
                    background-color: #2b2c2f;
                    box-shadow: none !important;

                    &:hover, &:focus-within {
                        border: 1px solid #1cb073 !important;
                    }
                }
                
            }
        }

        input#crypto.ant-select-selection-search-input, span.ant-select-selection-item {
            background-color: #2b2c2f;
            color: #d0d8e7;
        }

        .ant-select-arrow {
            color: #1cb073;
        }

        .ant-form-item-required {
            color: #d0d8e7;
        }
    }
`;