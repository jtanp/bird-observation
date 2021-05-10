import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #222222;
  }

  h1, h2, h3 {
    color: #fff;
  }

  p {
    color: #fff;
  }

  span {
    color: #fff;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #288246;
  width: 100%;
  padding: 10px;
  margin: 5px 0px 5px 0px;
  border: 1px solid #222222;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0px 5px 0px;
  border: 1px solid #222222;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0px 5px 0px;
  border: 1px solid #222222;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  margin: auto;
  width: 250px;
  justify-content: center;

  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const FormLink = styled.div`
  width: 250px;
  margin: auto;
  text-align: right;

  a {
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default GlobalStyle;