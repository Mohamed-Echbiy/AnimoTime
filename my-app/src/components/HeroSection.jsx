import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "./naruto-digital-art-black-background-amoled-3840x2160-5056.png";
import Image2 from "./itachi-uchiha-naruto-amoled-black-background-minimal-art-3840x2160-6478.jpg";
export default function HeroSection() {
  AOS.init();
  return (
    <div className="Hero-container">
      <BgImage>
        <div data-aos="fade-up">
          {/* <h1>
            <span>
              The World of <span>Japan</span>
            </span>
            <br />
            日本の世界を発見する  
          </h1> */}
        </div>
      </BgImage>
    </div>
  );
}
let bgImages = [Image1, Image2];
function random_item(bgImages) {
  return bgImages[Math.floor(Math.random() * bgImages.length)];
}

let bg = random_item(bgImages);

const BgImage = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: White;
    font-size: 30px;
    line-height: 1.7;
    letter-spacing: 2px;
    span {
      color: yellow;
      span {
        color: white;
      }
    }
  }
`;
//url("https://img.freepik.com/premium-photo/fantasy-abandoned-city-night_141465-12.jpg?w=2000")
