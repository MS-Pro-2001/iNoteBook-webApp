import React from "react";
import { useState } from "react";

const SignUp = () => {
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

    const response = await fetch("http://localhost:5000/api/auth/createUser", {
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
    console.log("******", json);
  };

  return (
    <div>
      <h1 className="text-center">SignUp</h1>

      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
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

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
