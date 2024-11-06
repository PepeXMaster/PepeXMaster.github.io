import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import { CiMail } from "react-icons/ci";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>

        <img src="/roboticArm.jpg" height={40} width={40} color='#0000'/> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >MyPortfolio</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/jose-luis-gonzalez-fragoso-b6bb63268/" target="blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://wa.me/528681012540">
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:pepe3fragoso@gmail.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
