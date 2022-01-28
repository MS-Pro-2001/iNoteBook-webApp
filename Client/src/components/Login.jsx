import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const error = (errorMessage) => {
    message.error(errorMessage);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/loginUser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json.authToken);
    if (json.authToken) {
      localStorage.setItem("token", json.authToken);
      navigate("/Home");
    } else {
      error("Invalid credentials. Please try again.")
    }

    try {
      const UserDetails = await fetch("/api/auth/GetUserDetails", {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          "auth-token": `${json.authToken}`,
        },
      });
      const json2 = await UserDetails.json();
      console.log(json2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    
     
      <div className="text-center">
      <h1 >Login</h1>
      <img  src="login.svg" alt="login image" width={300} height={300}/>
      </div>

      <form className="container col-8" onSubmit={handleOnSubmit}>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary ">
            LOGIN
          </button>
        </div>
       
      </form>
      
    </div>
  );
};

export default Login;
