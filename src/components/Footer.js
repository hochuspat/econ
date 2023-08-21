import React from 'react';
import styled from 'styled-components';

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

  return (
    <FooterContainer>
      <Logo src="/your-logo-image.svg" alt="Logo" />
      <InfoColumn>
        <FooterText>© 2013-2023 Экономический факультет</FooterText>            
        <FooterText>Тел.: +7 (861) 219-95-54, 219-95-53</FooterText>
            <FooterText>E-mail: decan@econ.kubsu.ru</FooterText>
      </InfoColumn>

    </FooterContainer>
  );
};

export default Footer;
