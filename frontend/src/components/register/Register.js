import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './Register.css';

const Register = () => {
    const [info, setInfo] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    })

    const history = useHistory();

    const userRegister = (user) => fetch(
        `http://localhost:8080/users/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Registeration failed.");
                return null;
            }
        })
        .then(data => {
            if (data !== null) {
                console.log(data);
                history.push("/login");
            }
        }
    )

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInfo(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userRegister(info);
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h2>Create a new user</h2>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="first_name" placeholder="First name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="last_name" placeholder="Last name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="registerLink">
                <span>Already a user? </span>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    )
}

export default Register;