import React, { useState } from "react";

export default function SignUp(func) {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleValidation = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <h2 id="sign_Up">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        name="Username"
        onChange={handlechange}
        minLength="7"
        maxLength="14"
        required
      />
      <input
        type="email"
        placeholder="eg. example@gmail.com"
        name="email"
        onChange={handlechange}
        required
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handlechange}
        minLength="7"
        maxLength="14"
        required
      />
      <button onClick={handleValidation}>submit</button>
      <p>
        you already have an account ? <p onClick={func.func}>SignIn</p>
      </p>
    </form>
  );
}
