import React, { useEffect, useState } from "react";
const animeQuotes = require("animequotes");

export default function Quate() {
  const qouteDefault = animeQuotes.randomQuote();
  const [quote, setQuote] = useState(qouteDefault);
  function GetRandomQoute() {
    setQuote(qouteDefault);
  }
  return (
    <div className="Qoute">
      <div className="Quate-Text">
        <p>
          {" "}
          Qoute : <span className="yellow"> {quote.quote} </span> From :{" "}
          <span className="avatar"></span>
          <span className="crimson">{quote.anime} </span> /{" "}
          <span className="purpel">{quote.name}</span>
          <span>
            {" "}
            <img
              src="https://www.svgrepo.com/show/104066/quotation-marks.svg"
              alt=""
              className="Qouat--Image2"
            />
          </span>
        </p>
        <img
          src="https://www.svgrepo.com/show/104066/quotation-marks.svg"
          alt=""
          className="Qouat--Image"
        />
      </div>

      <button onClick={GetRandomQoute}>Get a Random quote</button>
    </div>
  );
}
