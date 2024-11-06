import React from 'react';
import { AiFillLinkedin,AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/jose-luis-gonzalez-fragoso-b6bb63268/" target="blank">LinkedIn</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pepe3fragoso@gmail.com">
            JoseLuis@mail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem>
            +52 (868) 101 2540
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Copyright &copy; {year} <Link href="https://www.vipuljha.com">  Vipul Jha</Link>. All rights reserved.</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/jose-luis-gonzalez-fragoso-b6bb63268/" target="blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/528681012540" target="blank">
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:pepe3fragoso@gmail.com">
            <AiOutlineMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
