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
            Title : <span>{Anime.title}</span>
          </h3>
          <p>
            {" "}
            <span>Episodes</span> : {Anime.episodes ? Anime.episodes : "???"}
          </p>
          {Anime.genres && (
            <p>
              <span>Genres</span> :{" "}
              {Anime.genres.map((g) => {
                return `/${g.name}`;
              })}
            </p>
          )}
          <p>
            {" "}
            <span>Type</span> : {Anime.type}
          </p>
          <p>
            {" "}
            <span>Score</span> : {Anime.score} ⭐
          </p>
          {Anime.rated && (
            <p>
              {" "}
              <span>Rated</span> : {Anime.rated}
            </p>
          )}
          {Anime.rank && (
            <p>
              {" "}
              <span>Rank</span> : {Anime.rank}
            </p>
          )}
          {Anime.status && (
            <p>
              {" "}
              <span>Rank</span> : {Anime.status}
            </p>
          )}
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
  padding: 20px;
  border-radius: 25px;
  width: 300px;
  height: 500px;
  background-color: #1e1f20;
  box-shadow: 0px 9px 4px #0e0e0e;
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
    transition: transform 0.7s ease;
  }
  img:hover {
    transform: scale(1.4) ${item};
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
    line-height: 1.4;
    span {
      color: crimson;
    }
  }
  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    span {
      color: #b9b9b9;
    }
  }
`;
