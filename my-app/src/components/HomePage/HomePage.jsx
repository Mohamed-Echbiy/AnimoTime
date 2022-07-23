import React from "react";
import { memo } from "react";
import HomepageCard from "./HomepageCard";
import styled from "styled-components";

const HomePage = ({ Ep_R }) => {
  return <HomepageCard Ep_R={Ep_R} />;
};

// styling

const HomePage__container = styled.div``;
export default memo(HomePage);
