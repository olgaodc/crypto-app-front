import React from 'react';
import * as S from './primary-button-styled';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const PrimaryButton: React.FC<Props>  = ({
  children,
  onClick,
}) => {
  return (
    <S.PrimaryButton type="primary" onClick={onClick}>{children || 'Try It'}</S.PrimaryButton>
  )
}

export default PrimaryButton