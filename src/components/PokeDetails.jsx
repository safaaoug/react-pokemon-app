import * as t from "prop-types";
import React from "react";
import { usePokemon } from "../hooks/Pokemons";
import "./styles/PokeDetails.css";
import pokeballImg from "../assets/pokeball.svg";

const PokeDetails = ({ pokemon }) => {
  const id = pokemon?.url?.match(/\/(\d+)/)[1] || "";
  const { pokemon: pokeDetails = {} } = usePokemon(id);

  const { abilities, moves } = pokeDetails;

  return (
    <section className="detail-view">
      {pokemon ? (
        <>
          <div className="poke-wrapper">
            <h1 className="poke-name">Name: {pokemon?.name || ""}</h1>
            <p className="poke-data">
              Abilities:
              {abilities?.map(({ ability }) => (
                <span key={ability?.url}> {ability?.name}</span>
              ))}
            </p>
            <p className="poke-data">
              Moves:
              {moves?.map(({ move }) => (
                <span key={move?.url}> {move?.name}</span>
              ))}
            </p>
          </div>
          <div className="poke-img">
            <img
              alt={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            />
          </div>
        </>
      ) : (
        <>
          <div className="poke-title"> Select a Pokemon ! </div>
          <img src={pokeballImg} alt="pokeballImg" />
        </>
      )}
    </section>
  );
};
PokeDetails.prototype = {
  pokemon: t.object,
};

export default PokeDetails;
