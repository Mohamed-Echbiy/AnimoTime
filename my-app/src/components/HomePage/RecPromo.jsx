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
      <P>{R_Promo.entry.title}</P>
    </Div>
  );
}

const Div = styled.div`
  padding: 0px 10px;
  padding-bottom: 10px;
  font-size: 20px;
`;
const P = styled.div`
  font-size: 0.5em;
  font-weight: 600;
  padding: 5px;
`;
