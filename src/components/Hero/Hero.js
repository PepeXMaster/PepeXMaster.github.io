import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        JOSÉ LUIS
        </SectionTitle>
        <SectionText>
        Hi, I'm a mechatronics engineer with a concentration in automotive engineering. I'm always eager to learn and strive to stay a step ahead, constantly seeking innovative solutions and growth in everything I do as an engineer.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/JoseLuisGonzalezFragoso_Resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
