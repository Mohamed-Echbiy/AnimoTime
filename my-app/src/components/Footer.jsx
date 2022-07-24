import React, { useState } from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter, BsDiscord } from "react-icons/bs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
export default function Footer() {
  const [isfamilly, setIsFamilly] = useState(false);
  function handleVisibility() {
    setIsFamilly((pre) => !pre);
  }
  return (
    <>
      <Footer_Container>
        <Footer_Info>
          <Logo>
            <img
              src="https://i.pinimg.com/originals/67/2d/7b/672d7bf122e5af53a37819ef4c5188ef.jpg"
              alt="logo"
            />
            <h3>AnimoTime</h3>
          </Logo>
          <SocialMedia>
            <p>Follow Us :</p>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsDiscord />
          </SocialMedia>
          <Terms>
            <p>Terms of service</p>
            <p>DMCA</p>
            <p>Contact</p>
          </Terms>
          <p>© AnimoTime</p>
        </Footer_Info>
        {isfamilly ? (
          <SignIn func={handleVisibility} />
        ) : (
          <SignUp func={handleVisibility} />
        )}
      </Footer_Container>
    </>
  );
}
// styling

const Footer_Container = styled.div`
  grid-column: 1/-1;
  margin-top: 50px;
  height: 500px;
  width: 100%;
  position: relative;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(https://i.pinimg.com/originals/62/9c/a0/629ca0225def0508a72d96a5ff049130.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.1;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
  p {
    font-size: 10px;
    color: crimson;
  }
  form {
    width: 45%;
    min-width: 280px;
    margin: auto;
    z-index: 20;
    padding: 40px 10px;
    box-shadow: 0px 11px 20px 5px #0000003b;
    border-radius: 10px;

    input {
      display: block;
      margin: auto;
      margin-bottom: 20px;
      width: 250px;
      padding: 10px 5px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 0px black;
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      width: 150px;
      padding: 10px 0px;
      border-radius: 5px;
      display: block;
      margin: auto;
      cursor: pointer;
      transition: 0.5s ease;
      color: purple;
      font-weight: 600;
      :hover {
        transform: scale(0.9);
        background-color: #a1a1a1;
      }
    }
    p {
      text-align: center;
      margin-top: 20px;
      font-weight: 600;
      font-size: 12px;
      color: white;
      p {
        font-weight: 700;
        font-size: 14px;
        color: #ffff;
        padding: 10px 0px;
        cursor: pointer;
        display: inline;
        :hover {
          color: crimson;
        }
      }
    }
  }
`;
const Footer_Info = styled.div`
  width: 45%;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
const Logo = styled.div`
  z-index: 20;
  width: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  gap: 15px;
  p {
    padding-right: 10px;
    padding-top: 5px;
    color: white;
    font-size: 14px;
  }
  svg {
    height: 40px;
    :hover {
      filter: invert(90%) sepia(24%) saturate(7462%) hue-rotate(10deg)
        brightness(106%) contrast(94%);
    }
  }
`;
const Terms = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  gap: 15px;
  p {
    color: white;
    font-size: 12px;
    cursor: pointer;
    :hover {
      color: gold;
    }
  }
`;
