import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const SignUp = () => {
  let navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/createUser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.emailaddress,
        password: credentials.password,
      }),
    });

    

    const json = await response.json();
    console.log(json.authToken);
    localStorage.setItem('token',json.authToken)
    navigate("/Home");
    message.success("SignUp successfull!!");
  };

  return (
    <div>
      <h1 className="text-center my-2">SignUp</h1>
      <div className="text-center">
        <img src="signup.svg" alt="signupimg" width={300} height={300} />
      </div>

      <form
        onSubmit={handleOnSubmit}
        style={{
          border: "2px solid skyblue",
          boxShadow: "1px 2px 1px 1px lightblue",
        }}
      >
        <div className="mb-3 mx-5 my-5 ">
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              FirstName
            </label>
            <input
              type="firstname"
              className="form-control"
              id="firstname"
              name="firstname"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              required
              minLength={3}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Lastname
            </label>
            <input
              type="lastname"
              className="form-control"
              id="lastname"
              name="lastname"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              required
              minLength={3}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="emailaddress"
              className="form-control"
              id="emailaddress"
              name="emailaddress"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              onChange={handleOnChange}
              required
              minLength={6}
            />
          </div>
        </div>

        <div className="text-center my-3">
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
