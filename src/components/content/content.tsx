import { Container } from "../container";
import * as S from "./content.styled";
import cryptoImage from '../../assets/crypto-image.png';
import { PrimaryButton } from "../primary-button";
import { CryptoForm } from "../form";
import { useState } from "react";

const Content = () => {
  const [isClicked, setClicked] = useState(false); 


  const handleClick = () => {
    setClicked(true);
  }

  return (
    <S.ContentWrapper>
      <Container>
        <S.Content>          
          <S.Info>
            <S.Image src={cryptoImage} alt="mobile phone with cryptocurrency coins"/>
            <S.DescriptionWrapper>
            <S.Title>Cryptocurrency Price Tracking</S.Title>
              <S.Description>Experience the future of finance with real-time cryptocurrency price tracking. Stay ahead of the game, monitor price fluctuations, and make informed decisions as you explore the exciting world of digital assets. </S.Description>
              <PrimaryButton onClick={handleClick}/>
            </S.DescriptionWrapper>
          </S.Info>
          {isClicked && <CryptoForm/>}
        </S.Content>        
      </Container>
    </S.ContentWrapper>
  )
}

export default Content