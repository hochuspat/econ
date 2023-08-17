import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const FooterContainer = styled.footer`
background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 98%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  position: relative; /* Изменили позицию на relative */
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <FooterContainer>
      <Logo src="/your-logo-image.svg" alt="Logo" />
      <InfoColumn>
        <FooterText>© 2013-2023 ФГБОУ ВО «Кубанский государственный университет»</FooterText>
        <FooterText>Учредитель - Министерство науки и высшего образования РФ</FooterText>
        <FooterText>Министерство просвещения Российской Федерации</FooterText>
        <FooterText>При использовании материалов ссылка на сайт обязательна</FooterText>
      </InfoColumn>
      <InfoColumn>
        {isMobile && (
          <>
            <FooterText>Тел.: +7 (861) 219-95-30</FooterText>
            <FooterText>E-mail: abitur@kubsu.ru</FooterText>
          </>
        )}
        {isTablet && (
          <>
            <FooterText>Тел.: +7 (861) 219-95-30 - приемная комиссия</FooterText>
            <FooterText>E-mail: abitur@kubsu.ru</FooterText>
            <FooterText>Адрес: г. Краснодар, ул. Ставропольская, 149,</FooterText>
          </>
        )}
        {isLaptop && (
          <>
            <FooterText>Тел.: +7 (861) 219-95-30 - приемная комиссия</FooterText>
            <FooterText>E-mail: abitur@kubsu.ru</FooterText>
            <FooterText>Адрес: 350040, г. Краснодар, ул. Ставропольская, 149,</FooterText>
            <FooterText>Тел.: +7 (861) 219-95-02 - приемная ректора</FooterText>
            <FooterText>E-mail: rector@kubsu.ru</FooterText>
          </>
        )}
        {!isMobile && !isTablet && !isLaptop && (
          <>
            <FooterText>Политика конфиденциальности | Пользовательское соглашение</FooterText>
            <FooterText>Тел.: +7 (861) 219-95-30 - приемная комиссия</FooterText>
            <FooterText>E-mail: abitur@kubsu.ru</FooterText>
            <FooterText>Адрес: 350040, г. Краснодар, ул. Ставропольская, 149,</FooterText>
            <FooterText>Тел.: +7 (861) 219-95-02 - приемная ректора</FooterText>
            <FooterText>E-mail: rector@kubsu.ru</FooterText>
          </>
        )}
      </InfoColumn>
    </FooterContainer>
  );
};

export default Footer;
