import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { userRegister } from "../../controllers";
import { Container, Input, Button, Form, FormLink } from "../../styles";

const Register = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
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
    const data = userRegister(info);
    if (data != null) {
      history.push("/login");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Create a new user</h2>
        <Input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          className="form-control"
          id="first_name"
          placeholder="First name"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          className="form-control"
          id="last_name"
          placeholder="Last name"
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
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
        <Button type="submit" className="btn btn-primary">
          Register
        </Button>
      </Form>
      <FormLink>
        <span>Already a user? </span>
        <NavLink to="/login">Login</NavLink>
      </FormLink>
    </Container>
  );
};

export default Register;
