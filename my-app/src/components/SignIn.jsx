import React, { useState } from "react";
export default function SignIn(func) {
  const [formData, setFormData] = useState({
    Username: "",
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
  return (
    <>
      <form className="SignIn">
        <h2>SignIn</h2>
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
          type="password"
          placeholder="password"
          name="password"
          onChange={handlechange}
          minLength="7"
          maxLength="14"
          required
        />
        <button>Sign In</button>
        <p>
          you Don't have an Account <p onClick={func.func}>SignUp</p>
        </p>
      </form>
    </>
  );
}
