import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [navBarState, setnavBarState] = React.useState(false);
  function goTospecificwidth() {
    if (window.innerHeight >= 600 && window.innerHeight <= 740) {
      {
        window.scrollTo(0, window.innerHeight + 330);
      }
    } else if (window.innerHeight >= 800) {
      window.scrollTo(0, window.innerHeight + 310);
    } else {
      window.scrollTo(0, window.innerHeight + 320);
    }
  }
  function toggelNavBar() {
    setnavBarState((prevState) => !prevState);
  }
  return (
    <div className="Container">
      <div className="NavContainer">
        <Logo>
          <Link to="/" className="image-container">
            <img
              src="https://i.pinimg.com/originals/67/2d/7b/672d7bf122e5af53a37819ef4c5188ef.jpg"
              alt="Logo"
            />
          </Link>
        </Logo>
        <Search>
          <a href="#sign_Up">Sign Up</a>{" "}
          <FaBars className="BarIcon" onClick={toggelNavBar} />
        </Search>
      </div>
      <HeroSection />
      <Navbar State={navBarState}>
        <div className="Category">
          <h2>AnimoTime</h2>
          <ul>
            <Link to="/" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Home</p>
              </li>
            </Link>
            <Link to="/Airing" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Airing</p>
              </li>
            </Link>
            <Link to="/Top Tv series" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Series</p>
              </li>
            </Link>
            <Link to="/Top Movies" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Movies</p>
              </li>
            </Link>
            <Link to="/Upcoming" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Upcoming Animes</p>
              </li>
            </Link>
            <Link to="/Most Popular" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Popular Animes</p>
              </li>
            </Link>
            {/* <Link to="/Reviews" onClick={goTospecificwidth}>
              <li onClick={goTospecificwidth}>
                <p onClick={goTospecificwidth}>Reviews</p>
              </li>
            </Link> */}
          </ul>
        </div>
      </Navbar>
    </div>
  );
}

const Logo = styled.div`
  height: 70px;
  display: flex;
  gap: 10px;
  min-width: 150px;
  align-items: center;
  img {
    max-height: 100%;
    border-radius: 50%;
  }
`;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  a {
    font-weight: 600;
    color: white;
    :hover {
      color: gold;
    }
  }
  @media (max-width: 300px) {
    input {
      display: none;
    }
  }
`;
const Navbar = styled.div`
  position: fixed;
  top: 70px;
  right: ${(props) => {
    if (props.State === true) {
      return `0%`;
    } else {
      return `-200%`;
    }
  }};
  transition: 0.5s ease;
  z-index: 300;
  width: 300px;
  min-height: 100vh;
  background-color: #000000bf;
  padding: 30px 5px;
  a {
    color: crimson;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 30px;
    font-size: 1rem;
    padding: 0px 10px;
  }
  input {
    width: 250px;
    padding: 15px;
    border: 1px solid #000;
    border-radius: 25px;
    margin: 0px 15px;
    display: none;
  }
  @media (max-width: 280px) {
    input {
      display: block;
    }
  }
`;
