import React from "react";
import styled from "styled-components";
import { Container } from "../../theme/styles";

const HomeContainer = styled(Container)`
  p {
    font-size: 28px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome</h1>
      <p>Login to save new observations.</p>
    </HomeContainer>
  );
};

export default Home;
