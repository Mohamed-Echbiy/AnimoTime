import React from "react";
import styled from "styled-components";
//Ep_R.entry.images.jpg.image_url
//Ep_R.entry.title
//Ep_R.episodes[0].title
//Ep_R.episodes[0].premium && "Premium"
export default function HomepageCard({ Ep_R }) {
  return (
    <>
      <CardComponent className="CardComponent">
        <ImageContainer className="ImageContainer_CardCompo">
          <img
            src={Ep_R.entry.images.jpg.image_url}
            alt="CoverImage"
            className="coverImage"
          />
          <p className="description">Recent Episodes</p>
        </ImageContainer>
        <AnimeInfo>
          <h3>
            Title: <span>{Ep_R.entry.title}</span>
          </h3>
          <p> {Ep_R.episodes[0].title}</p>
          <span>{Ep_R.episodes[0].premium ? "Premium" : "Free"}</span>
        </AnimeInfo>
      </CardComponent>
    </>
  );
}

// styling

const CardComponent = styled.div`
  margin: 10px 0px;
  border-radius: 5px;
  width: 300px;
  height: 500px;
  box-shadow: 0px 8px 10px #313638ba;
  position: relative;
`;
const ImageContainer = styled.div`
  height: 500px;
  width: 300px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    cursor: pointer;
    transition: transform 0.5s ease;
  }
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
    background-color: #f2f2f2f2;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    width: 300px;
    span {
      color: crimson;
    }
  }

  p {
    font-size: 0.8rem;
    position: absolute;
    padding: 5px;
    top: -370px;
    background-color: black;
    span {
      position: absolute;
      top: 0px;
    }
    ::after {
      content: "";
    }
  }
`;
