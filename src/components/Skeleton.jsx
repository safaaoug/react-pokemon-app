import * as t from "prop-types";
import React from "react";
import styled from "styled-components";
import "./styles/skeleton.css";

const ViewDiv = styled.div`
  ${({ h }) => (h ? `hight: ${h};` : "")}
  ${({ w }) => (w ? `width: ${w};` : "")}
`;

const SkeletonLine = ({ lines = 3, h, w }) => (
  <ViewDiv className="skeleton" h={h} w={w} />
);
SkeletonLine.prototype = {
  lines: t.number,
  h: t.string,
  w: t.string,
};

const SkeletonPokemons = ({ elementNumber = 20 }) => (
  <div className="list">
    {Array.from({ length: elementNumber }).map((_, i) => (
      <SkeletonLine key={i} h="10px"></SkeletonLine>
    ))}
  </div>
);
SkeletonPokemons.prototype = {
  elementNumber: t.number,
};

export default SkeletonPokemons;
