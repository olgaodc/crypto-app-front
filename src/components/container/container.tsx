import React from 'react';
import { StyledContainer } from './container.styled';   

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <StyledContainer {...props} />
  )
}

export default Container