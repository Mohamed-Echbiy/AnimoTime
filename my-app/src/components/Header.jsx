import React from "react";
import styled from "styled-components";
import Image from "../components/onePiece.jpg";
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
    if (navBarState) {
      goTospecificwidth();
    }
  }
  return (
    <div className="Container">
      <div className="NavContainer">
        <Logo>
          <Link to="/" className="image-container">
            <img src={Image} alt="Logo" />
          </Link>
          <h2>AnimoCast</h2>
        </Logo>
        <Search>
          <Link to="/SignUp">
            <h4>Sign Up</h4>{" "}
          </Link>
          <FaBars className="BarIcon" onClick={toggelNavBar} />
        </Search>
      </div>
      <HeroSection />
      <Navbar State={navBarState}>
        <div className="Category">
          <h2>Category</h2>
          <ul>
            <Link to="/" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Home</p>
              </li>
            </Link>
            <Link to="/Airing" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Airing</p>
              </li>
            </Link>
            <Link to="/Top Tv series" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Top Series</p>
              </li>
            </Link>
            <Link to="/Top Movies" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Top Movies</p>
              </li>
            </Link>
            <Link to="/Upcoming" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Top Upcoming Animes</p>
              </li>
            </Link>
            <Link to="/Most Popular" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Top Popular Animes</p>
              </li>
            </Link>
            <Link to="/Sing In" onClick={toggelNavBar}>
              <li onClick={toggelNavBar}>
                <p onClick={toggelNavBar}>Sing In</p>
              </li>
            </Link>
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
  }
`;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  input {
    max-width: 250px;
    padding: 15px;
    border-radius: 25px;
    margin: 0px 15px;
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
  overflow: scroll;
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
  background-color: #fff;
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
