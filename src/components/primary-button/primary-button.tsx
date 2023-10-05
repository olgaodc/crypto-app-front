import React from 'react';
import * as S from './primary-button-styled';

interface Props {
  htmlType?: string;
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
}

const PrimaryButton: React.FC<Props>  = ({
  children,
  onClick,
  loading,
}) => {
  return (
    <S.PrimaryButton type="primary" onClick={onClick} loading={loading}>{children || 'Try It'}</S.PrimaryButton>
  )
}

export default PrimaryButton