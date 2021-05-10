import React from "react";
import styled from "styled-components";
import { Container } from "../../styles";

const AboutContainer = styled(Container)`
  p {
    font-size: 28px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <p>This website saves bird observations.</p>
    </AboutContainer>
  );
};

export default About;
