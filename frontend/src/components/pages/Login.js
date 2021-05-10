import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { userLogin } from "../../controllers";
import { Container, Input, Button, Form, FormLink } from "../../styles";

const Login = (props) => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = userLogin(info);
    if (data != null) {
      props.login();
      history.push("/");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <FormLink>
        <span>New user? </span>
        <NavLink to="/register">Register</NavLink>
      </FormLink>
    </Container>
  );
};

export default Login;
