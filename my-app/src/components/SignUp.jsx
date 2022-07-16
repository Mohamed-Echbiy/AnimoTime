import React from "react";
import styled from "styled-components";
export default function SignUp() {
  return (
    <>
      <Form_Container>
        <form className="SignUp">
          <label></label>
          <input
            type="text"
            placeholder="Type a username"
            required
            id="usernam"
            value=""
          />
          <lable></lable>
          <input
            type="text"
            placeholder="Put your full name"
            value=""
            id="full_name"
            required
          />
          <label htmlFor=""></label>
          <input
            type="email"
            placeholder="xxx@example.com"
            value=""
            id="email"
            required
          />
          <input type="password" required id="password" value="" />
          <button>Submit</button>
        </form>
      </Form_Container>
    </>
  );
}

const Form_Container = styled.div``;
