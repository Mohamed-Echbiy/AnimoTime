import React from "react";
import styled from "styled-components";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
export default function RecPromo({ R_Promo }) {
  return (
    <Div>
      <LiteYouTubeEmbed
        id={R_Promo.trailer.youtube_id}
        title={R_Promo.title}
        noCookie={true}
      />
      <P>
        <span>Title</span> : {R_Promo.entry.title}
      </P>
    </Div>
  );
}

const Div = styled.div`
  margin: 10px 5px;
  padding: 5px;
  padding-bottom: 10px;
  font-size: 20px;
  border: 5px crimson solid;
  border-radius: 10px 20px 0px 5px;
`;
const P = styled.div`
  font-size: 0.7em;
  font-weight: 600;
  color: crimson;
  padding: 10px;
  span {
    color: gold;
  }
`;
