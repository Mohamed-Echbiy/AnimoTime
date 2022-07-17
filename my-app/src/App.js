import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./components/Card";
import ScrollToTop from "react-scroll-to-top";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quate from "./components/Quate";
import HomePage from "./components/HomePage/HomePage";
import RecPromo from "./components/HomePage/RecPromo";
// import OurRecomndation from "./components/HomePage/OurRecomndation";

export default function App() {
  const [airingAnimeData, setAiringAnimeData] = React.useState([]);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };

    fetch("https://jikan1.p.rapidapi.com/top/anime/1/airing", options)
      .then((response) => response.json())
      .then((response) => setAiringAnimeData(response.top));
  }, []);

  const AnimeDataairing = airingAnimeData.map((Anime) => {
    if ((Anime.type === "ONA") | (Anime.title === "Chibi Maruko-chan (1995)")) {
      return null;
    } else {
      return <Card key={Anime.mal_id} Anime={Anime} />;
    }
  });
  // ###########################
  // ###########
  const [topTv, setTopTv] = React.useState([]);
  const [topTvP2, setTopTvP2] = React.useState([]);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };

    fetch("https://jikan1.p.rapidapi.com/top/anime/1/tv", options)
      .then((response) => response.json())
      .then((response) => setTopTv(response.top))
      .catch((err) => console.error(err));
  }, []);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };

    fetch("https://jikan1.p.rapidapi.com/top/anime/2/tv", options)
      .then((response) => response.json())
      .then((response) => setTopTvP2(response.top))
      .catch((err) => console.error(err));
  }, []);
  const TopTvSeries = topTv.map((Anime) => {
    if ((Anime.type === "ONA") | (Anime.title === "Chibi Maruko-chan (1995)")) {
      return null;
    } else {
      return <Card key={Anime.mal_id} Anime={Anime} />;
    }
  });
  const TopTvSeries2 = topTvP2.map((Anime) => {
    if ((Anime.type === "ONA") | (Anime.title === "Chibi Maruko-chan (1995)")) {
      return null;
    } else {
      return <Card key={Anime.mal_id} Anime={Anime} />;
    }
  });
  // ######################
  const [upcoming, setTopMovie] = React.useState([]);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };

    fetch("https://jikan1.p.rapidapi.com/top/anime/1/movie", options)
      .then((response) => response.json())
      .then((response) => setTopMovie(response.top))
      .catch((err) => console.error(err));
  }, []);
  const topMovie = upcoming.map((Anime) => {
    if ((Anime.type === "ONA") | (Anime.title === "Chibi Maruko-chan (1995)")) {
      return null;
    } else {
      return <Card key={Anime.mal_id} Anime={Anime} />;
    }
  });
  // #########################""
  const [UpcomingAnime, setUpcoming] = React.useState([]);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };

    fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", options)
      .then((response) => response.json())
      .then((response) => setUpcoming(response.top))
      .catch((err) => console.error(err));
  }, []);
  const Upcoming = UpcomingAnime.map((Anime) => {
    if ((Anime.type === "ONA") | (Anime.title === "Chibi Maruko-chan (1995)")) {
      return null;
    } else {
      return <Card key={Anime.mal_id} Anime={Anime} />;
    }
  });
  // ################################
  const [mostPoupuler, setMostPoupuler] = React.useState([]);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };

    fetch("https://jikan1.p.rapidapi.com/top/anime/1/bypopularity", options)
      .then((response) => response.json())
      .then((response) => setMostPoupuler(response.top))
      .catch((err) => console.error(err));
  }, []);
  const popularity = mostPoupuler.map((Anime) => {
    if ((Anime.type === "ONA") | (Anime.title === "Chibi Maruko-chan (1995)")) {
      return null;
    } else {
      return <Card key={Anime.mal_id} Anime={Anime} />;
    }
  });
  // ###############""
  const [search, setSearch] = React.useState("Naruto");
  const [anime, setAnime] = useState([]);
  const [countEffect, setCountEffect] = useState(0);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d29fefdb6emshc22f056965ae022p17f5efjsn710a73ae2c30",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };
    fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${search}`, options)
      .then((response) => response.json())
      .then((response) => setAnime(response.results))
      .catch((err) => console.error(err));
  }, [countEffect]);

  // fetching recent eposides data

  //
  const [recentEp, setRecentEp] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/watch/episodes`)
      .then((res) => res.json())
      .then((data) => setRecentEp(data.data));
  }, []);
  const recentepoiseds = recentEp.slice(0, 5).map((Ep_R) => {
    return <HomePage key={Ep_R.entry.mal_id} Ep_R={Ep_R} />;
  });
  const [isRecentVis, setRecentVis] = useState(false);
  function ToggelAllRecent() {
    setRecentVis((pre) => !pre);
  }
  const Allrecentepoiseds = recentEp.slice(5).map((Ep_R) => {
    return <HomePage key={Ep_R.entry.mal_id} Ep_R={Ep_R} />;
  });
  const [populareEP, setPopularEp] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/watch/episodes/popular`)
      .then((res) => res.json())
      .then((data) => setPopularEp(data.data));
  }, []);
  const PopulareEp = populareEP.slice(0, 20).map((Ep_R) => {
    if (Ep_R.region_locked === true) {
      return null;
    } else {
      return <HomePage key={Ep_R.entry.mal_id} Ep_R={Ep_R} />;
    }
  });

  const [recPromo, setRecPromo] = useState([]);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/watch/promos`)
      .then((res) => res.json())
      .then((data) => setRecPromo(data.data));
  }, []);
  const promo = recPromo.slice(0, 6).map((R_Promo, index) => {
    return <RecPromo key={index} R_Promo={R_Promo} />;
  });

  return (
    <Router>
      <>
        <Header />
        <Quate />
        <ScrollToTop smooth />
        <div className="sarchBar">
          <input
            placeholder="Search Anime"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              if (
                (anime === undefined) |
                (search === "") |
                (search === undefined)
              ) {
              } else {
                setCountEffect((prev) => prev + 1);
              }
            }}
          >
            <Link to="/Search">Search</Link>
          </button>
        </div>
        <div className="MainContainer">
          <Switch>
            <Route exact path="/">
              <H3>Recent Episodes</H3>
              {recentepoiseds}
              <ViewAll>
                {" "}
                <p onClick={ToggelAllRecent}>
                  {" "}
                  {isRecentVis ? "Hide" : "Show more"}{" "}
                </p>
              </ViewAll>
              {isRecentVis ? Allrecentepoiseds : null}
              {/* <H3>Our Reacomendation</H3>
              <div className="OurRecomndation">{Recomndation}</div> */}
              <H3>Popular Episodes</H3>
              {PopulareEp}
              <br />
              <br />
              <H4>Recent Promos</H4>
              <Div>{promo}</Div>
            </Route>
            <Route exact path="/Airing">
              <H3>Airing Anime</H3>

              {AnimeDataairing}
            </Route>
            <Route exact path="/Search">
              <H3>Search Resultes : </H3>
              {anime.map((Anime) => {
                return <Card key={Anime.mal_id} Anime={Anime} />;
              })}
            </Route>
            <Route exact path="/Top Tv series">
              <H3>Top Tv series : </H3>
              <>
                {TopTvSeries}
                {TopTvSeries2}
              </>
            </Route>
            <Route exact path="/Top Movies">
              <H3>Top Movies : </H3>
              {topMovie}
            </Route>
            <Route exact path="/Upcoming">
              <H3>Upcoming Anime :</H3>
              {Upcoming}
            </Route>
            <Route exact path="/Most Popular">
              <H3>Most Popular Anime : </H3>
              {popularity}
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}
const H3 = styled.h3`
  margin-bottom: 30px;
  grid-column: 1 / -1;
  text-transform: uppercase;
  text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
  padding-left: 20px;
`;
const H4 = styled.h3`
  margin-top: 30px;
  margin-bottom: 30px;
  grid-column: 1 / -1;
  text-transform: uppercase;
  text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
  padding-left: 20px;
`;
const ViewAll = styled.div`
  cursor: pointer;
  jsutify-self: flex-end;
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin-bottom: 10px;
  p {
    cursor: pointer;
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: black;
    color: white;
    :hover {
      background-color: #000000b3;
    }
  }
`;
const Div = styled.div`
  grid-column: 1 / -1;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;
