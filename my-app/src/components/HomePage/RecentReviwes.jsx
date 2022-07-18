import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function RecentReviwes({ review, num }) {
  const [isVisible, setIsVisible] = useState(false);
  function toggleReviewVis() {
    setIsVisible((pre) => !pre);
  }
  return (
    <Warp num={num}>
      <ReviewContainerImage>
        <img src={review.entry.images.jpg.image_url} alt="coverImage" />
      </ReviewContainerImage>
      <ReviewContainerInfo>
        <h1> {review.entry.title} </h1>
        <p>
          {" "}
          <span>@Author</span> : {review.user.username}{" "}
        </p>
        <ul>
          <li>
            <span>Scores</span> :{" "}
          </li>
          <li>
            <span> Animation </span> : {review.scores.animation} <span>/</span>
          </li>
          <li>
            <span> Character </span> : {review.scores.character} <span>/</span>
          </li>
          <li>
            <span>Enjoyment</span> : {review.scores.enjoyment} <span>/</span>
          </li>
          <li>
            <span> Overall</span> : {review.scores.overall} <span>/</span>
          </li>
          <li>
            <span>Sounds</span> : {review.scores.sound} <span>/</span>
          </li>
          <li>
            {" "}
            <span>Story</span> : {review.scores.story}{" "}
          </li>
        </ul>
        <IconShow>
          {" "}
          Review
          {isVisible ? (
            <BsFillCaretUpFill onClick={toggleReviewVis} />
          ) : (
            <BsFillCaretDownFill onClick={toggleReviewVis} />
          )}
        </IconShow>
        <Review>
          {isVisible && (
            <p>
              {" "}
              <span>Review</span> : {review.review}{" "}
            </p>
          )}
        </Review>
      </ReviewContainerInfo>
      <Div>
        <Link to="/Reviews"> {num === 1 && <p> View all </p>} </Link>
      </Div>
    </Warp>
  );
}
const Div = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-end;
  p {
    cursor: pointer;
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #2a2c31;
    box-shadow: 0px 7px 10px 0px rgb(0 0 0 / 50%);
    color: purple;
    :hover {
      background-color: #000000b3;
    }
  }
`;
const IconShow = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100px;
  gap: 20px;
  font-weight: 500;
`;
const ReviewContainerImage = styled.div`
  width: 200px;
  poasition: relative;
  img {
    max-width: 100%;
  }
`;

const ReviewContainerInfo = styled.div`
  max-width: calc(100% - 220px);
  min-width: 280px;
  h1 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: crimson;
  }
  ul {
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    padding: 5px 0px;
    padding-right: 5px;
    color: white;
    font-weight: 600;
    span {
      color: purpel;
    }
  }
  p {
    color: gold;
  }
  span {
    color: #b9b9b9;
  }
`;
const Review = styled.div`
  max-width: 100%;
  min-width: 280px;
  p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
  }
`;
const Warp = styled.div`
  width: 100%;
  padding: 0px 20px;
  padding-top: 20px;
  grid-column: 1/-1;
  margin-bottom: ${(prop) => (prop.num === 2 ? "30px" : "0px")};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  background-color: #1e1f20;
  box-shadow: 0px 9px 4px #0e0e0e;
  border-radius: 25px 0px 10px;
  @media (max-width: 360px) {
    padding: 0px 5px;
  }
  @media (max-width: 768px) {
    padding: 0px 10px;
  }
  @media (max-width: 992px) {
    padding: 15px;
  }
`;
