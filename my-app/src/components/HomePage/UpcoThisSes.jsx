import React from "react";
import styled from "styled-components";
import { BsYoutube } from "react-icons/bs";
export default function UpcoThisSes({ up }) {
  function LinkTo() {
    window.open(`${up.url}`);
  }
  return (
    <Div>
      <Title>
        <h3> {up.title} </h3>
      </Title>
      <Image>
        <img src={up.images.jpg.image_url} alt="coverImage" onClick={LinkTo} />
      </Image>
      <Info>
        <p>
          {" "}
          <span>Type :</span> {up.type}{" "}
        </p>
        <p className="Genre">
          <span>Genres</span> :{" "}
          {up.genres.map((e) => {
            return `${e.name}/ `;
          })}{" "}
        </p>
        <p>
          {" "}
          <span>Source :</span> {up.source}{" "}
        </p>
        {up.studios.length > 0 ? (
          <p>
            {" "}
            <span>Studios :</span> {up.studios.map((e) => e.name)}
          </p>
        ) : (
          <p>
            {" "}
            <span>Studios :</span> ???{" "}
          </p>
        )}
        <P>
          <span>Trailer :</span>{" "}
          <a href={up.trailer.url} target="_blank">
            <BsYoutube />
          </a>{" "}
        </P>
      </Info>
    </Div>
  );
}
const Div = styled.div`
  margin: auto;
  width: 280px;
  height: 590px;
  background-color: #1e1f20;
  box-shadow: 0px 9px 4px #0e0e0e;
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const Title = styled.div`
  padding: 15px 0px;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  h3 {
    color: crimson;
    font-size: 0.7rem;
    text-align: center;
  }
`;
const Image = styled.div`
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 399px;
    transition: ease 0.5s;
    cursor: pointer;
    :hover {
      transform: scale(1.3) rotate(10deg);
      z-index: 100;
    }
  }
`;
const Info = styled.div`
  padding: 0px 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
  gap: 6px;
  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: white;
    span {
      color: #b9b9b9;
    }
  }
  .Genre {
    font-size: 0.7rem;
    span {
      font-size: 0.9rem;
    }
  }
`;
const P = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 600;
  span {
    color: #b9b9b9;
  }
  a {
    display: flex;
    align-items: center;
  }
`;
