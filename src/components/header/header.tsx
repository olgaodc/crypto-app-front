import logoImage from '../../assets/logo-image.png';
import { Container } from '../container';
import { PrimaryButton } from '../primary-button';
import * as S from './header.styled';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Container>
        <S.Header>
            <S.LogoWrapper href='/'>
              <S.Image src={logoImage} alt='logo image'/>
            <S.LogoText>CryptoSnap</S.LogoText>
          </S.LogoWrapper>
          
          <S.Navbar>
            <S.NavbarItem>
              <PrimaryButton onClick={() => console.log('clicked')} />
            </S.NavbarItem>
          </S.Navbar>
        </S.Header>
      </Container>
    </div>
  )
}

export default Header