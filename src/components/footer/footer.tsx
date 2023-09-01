import React from 'react';
import { Container } from '../container';
import * as S from './footer.styled';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <Container>
        <S.Footer>          
          <S.FooterInfo>
            @ CryptoSnap 2023           
          </S.FooterInfo>
        </S.Footer>
      </Container>
    </div>
  )
}

export default Footer