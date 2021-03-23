import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", values)
            .then((res) => {
                console.log("res", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/friends");
            })
            .catch((err) => {
                console.log({ err });
            });
    };

    return (
        <div className="form-container">
            <h2>Hi Friend!</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={values.username}
                        placeholder="Username"
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                        placeholder="Password"
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;