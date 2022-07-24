import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AnimeData from "./AnimData.json";
import AnimeData2 from "./Anim2Data.json";
import AnimeData3 from "./Anim3Data.json";
export default function RandomAnime() {
  const Data = [...AnimeData.data, ...AnimeData2.data, ...AnimeData3.data];
  const [loading, setLoading] = useState(false);
  const [random, setRandomAnime] = useState([]);
  function RandomAnime() {
    setRandomAnime(Data[Math.floor(Math.random() * Data.length)]);
    return setLoading(true);
  }
  return (
    <Container>
      <h1> You Don't know What to watch ? </h1>
      <DivB>
        {loading ? (
          <Divado>
            <Image>
              <img src={random.images.jpg.image_url} alt="" />
            </Image>

            <Info>
              <p>
                Title : <span>{random.title} </span>
              </p>
              <p>
                Episodes : <span>{random.episodes} </span>
              </p>
              <p>
                Duration : <span> {random.duration} </span>
              </p>
              <p>
                Score: <span> {random.score} </span>
              </p>
              <p>
                Genres :{" "}
                <span> {random.genres.map((ge) => `${ge.name}/ `)} </span>
              </p>
              <p>
                Type : <span>{random.type} </span>
              </p>
              <p>
                Studios : <span>{random.studios.map((e) => e.name)} </span>
              </p>
              <p>
                Season : <span>{random.season} </span>
              </p>
            </Info>
          </Divado>
        ) : (
          ""
        )}
      </DivB>
      <br />
      <button onClick={RandomAnime}>Get random Anime</button>
    </Container>
  );
}
const Container = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  h1 {
    width: 100%;
    text-align: center;
  }
  button {
    margin-top: 20px;
    padding: 10px;
    width: 200px;
    border-radius: 15px;
    cursor: pointer;
    color: purple;
    font-weight: 600;
    transition: 0.5s ease;
    background-color: white;
    :hover {
      background-color: #a1a1a1;
      transform: scale(0.9);
    }
  }
`;
const DivB = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const Divado = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;
const Image = styled.div`
  img {
    width: 200px;
    @media (max-width: 520px) {
      width: 120px;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  p {
    font-size: 1.2rem;
    color: gold;
    letter-spacing: 2px;
    font-weight: 600;
    @media (max-width: 520px) {
      font-size: 0.6rem;
    }
    span {
      color: crimson;
    }
  }
`;
