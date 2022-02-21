import React from "react";
import "./styles/PokeCard.css";
import * as t from "prop-types";

const PokeCard = ({ pokemon, setSelectedPokemon }) => {
  // Getting id from url since we don't have it in the object
  // Perfermance issue : We are fetching images for each pokemon using the id (not good since we need to fetch 1126 img)
  // Solutions: pagination, scroll oagination with lazyloading...
  const id = pokemon?.url.match(/\/(\d+)/)[1] || "";

  return (
    <button
      className="poke-card"
      onClick={() => {
        setSelectedPokemon(pokemon);
      }}
    >
      <img
        alt={id}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
      />
      <b>{pokemon?.name || ""}</b>
    </button>
  );
};

PokeCard.propTypes = {
  pokemon: t.shape({ name: t.string, url: t.string }),
  setSelectedPokemon: t.func,
};

export default PokeCard;
