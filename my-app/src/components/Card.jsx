import { display } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// // // // // // // // // // // // // // // // // ///////////
// // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // ///
export default function Card({ Anime }) {
  function LinkTo() {
    window.open(`${Anime.url}/video`);
  }
  //${Anime.url}/video`
  return (
    <>
      <CardComponent className="CardComponent">
        <ImageContainer className="ImageContainer_CardCompo">
          <img
            src={Anime.image_url}
            alt="CoverImage"
            className="coverImage"
            onClick={LinkTo}
          />
          <p className="description">Go to MyAnimeList Page</p>
        </ImageContainer>
        <AnimeInfo>
          <h3>
            Title: <span>{Anime.title}</span>
          </h3>
          <p>Episodes: {Anime.episodes}</p>
          {Anime.genres && (
            <p>
              Genres :{" "}
              {Anime.genres.map((g) => {
                return `/${g.name}`;
              })}
            </p>
          )}
          <p>Type : {Anime.type}</p>
          <p>Score: {Anime.score} ⭐</p>
          {Anime.rated && <p>Rated: {Anime.rated}</p>}
          {Anime.rank && <p>Rank : {Anime.rank}</p>}
          {Anime.status && <p>Rank : {Anime.status}</p>}
        </AnimeInfo>
      </CardComponent>
    </>
  );
}

// styling

const CardComponent = styled.div`
  margin: 10px auto;
  padding: 20px;
  border-radius: 25px;
  width: 300px;
  height: 500px;
  box-shadow: 0px 8px 10px #313638ba;
`;
const ImageContainer = styled.div`
  position: relative;
  height: 310px;
  overflow: hidden;
  margin-bottom: 20px;
  img {
    width: 219px;
    height: 100%;
    display: block;
    margin: auto;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.5s ease;
  }
  img:hover {
    transform: scale(1.1);
  }
`;
const AnimeInfo = styled.div`
  padding: 10px 0px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    span {
      color: crimson;
    }
  }
  p {
    font-size: 0.8rem;
  }
`;
