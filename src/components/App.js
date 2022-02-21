import React, { useState } from "react";
import PokeDetails from "./PokeDetails";
import PokeList from "./PokeList";
import "./styles/App.css";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const ViewImage = styled.img`
  width: 200;
  height: 100px;
`;

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <div className="layout-container">
      <div className="row header">
        <ViewImage src={logo} alt="logo" />
      </div>
      <div className="row container">
        <div className="flex-col poke-list">
          <PokeList setSelectedPokemon={setSelectedPokemon} />
        </div>
        <div className="flex-col poke-detail">
          <PokeDetails pokemon={selectedPokemon} />
        </div>
      </div>
    </div>
  );
}

export default App;
