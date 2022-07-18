import React from "react";
import styled from "styled-components";
export default function HomepageCard({ Ep_R }) {
  function LinkTo() {
    window.open(`${Ep_R.entry.url}/video`);
  }
  return (
    <>
      <CardComponent className="CardComponent" onClick={LinkTo}>
        <ImageContainer className="ImageContainer_CardCompo">
          <Overlay onClick={LinkTo}></Overlay>
          <img
            src={Ep_R.entry.images.jpg.image_url}
            alt="CoverImage"
            className="coverImage"
          />
        </ImageContainer>
        <AnimeInfo>
          <h3>
            <div>
              {" "}
              Title: <span>{Ep_R.entry.title}</span>
            </div>
          </h3>
          <p> {Ep_R.episodes[0].title}</p>
          <span className="premiumOrFree__Homepage">
            {Ep_R.episodes[0].premium ? "Premium" : "Free"}
          </span>
        </AnimeInfo>
      </CardComponent>
    </>
  );
}

// styling

const randomRotate = ["rotate(10deg)", "rotate(-10deg)"];
function random_Rotate(Rotate) {
  return Rotate[Math.floor(Math.random() * randomRotate.length)];
}
let item = random_Rotate(randomRotate);

const CardComponent = styled.div`
  margin: 10px auto;
  border-radius: 15px;
  height: 400px;
  width: 271px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.7s ease;
  background-color: #1e1f20;
  box-shadow: 0px 9px 4px #0e0e0e;
  :hover img {
    transform: scale(1.2) ${item};
  }
`;
const ImageContainer = styled.div`
  height: 400px;
  position: relative;
  border-radius: 15px;
  width: 271px;
  margin-bottom: 20px;
  background-color: black;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    cursor: pointer;
    transition: transform 0.5s ease;
    border-radius: 15px;
    cursor: pointer;
  }
`;
const Overlay = styled.div`
  width: 271px;
  height: 400px;
  position: absolute;
  background-color: #0000001a;
  cursor: pointer;
`;
const AnimeInfo = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  position: absolute;
  bottom: -10px;

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    // padding: 50px 10px;
    height: 100px;
    background-color: #191919eb;
    display: flex;
    align-items: flex-end;
    padding: 0px 10px;
    width: 271px;
    div {
      color: gold;
      margin-bottom: 20px;
    }
    span {
      color: crimson;
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: 700;
    position: absolute;
    padding: 10px;
    border-radius: 15px 0px 25px 0px;
    top: -292px;
    background-color: #000000c7;
    color: white;
    span {
      position: absolute;
      top: 0px;
    }
  }
`;
