import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [info, setInfo] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    const userLogin = (user) => fetch(
        `http://localhost:8080/users/login`,
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
                alert("Invalid username/password.");
                return null;
            }
        })
        .then(data => {
            if (data !== null) {
                console.log(data);
                history.push("/");
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
        userLogin(info)
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="registerLink">
                <span>New user? </span>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    )
}

export default Login;