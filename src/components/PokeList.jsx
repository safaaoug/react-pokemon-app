import * as t from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { usePokemons } from "../hooks/Pokemons";
import PokeCard from "./PokeCard";
import SkeletonPokemons from "./Skeleton";
import { debounce } from "lodash";
import "./styles/PokeList.css";

const PokeList = ({ setSelectedPokemon }) => {
  const [query, setQuery] = useState();
  const { pokemons, isLoading } = usePokemons();

  const handleChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const onFilterChange = useMemo(
    () => debounce(handleChange, 300),
    [handleChange]
  );

  const filteredPokemons = useMemo(
    () =>
      query ? pokemons.filter(({ name }) => name.includes(query)) : pokemons,
    [query, pokemons]
  );

  useEffect(() => {
    return () => {
      onFilterChange.cancel();
    };
  });

  return (
    <>
      <div className="list-header">
        <h3 className="all-poke"> All pokemons </h3>
        <input
          type="text"
          className="filter-poke"
          placeholder="pokemon name"
          size="20"
          onChange={onFilterChange}
        />
      </div>
      <div className="list">
        {isLoading ? (
          <SkeletonPokemons />
        ) : filteredPokemons.length > 0 ? (
          filteredPokemons?.map((pokemon, index) => (
            <PokeCard
              key={pokemon.url}
              setSelectedPokemon={setSelectedPokemon}
              pokemon={pokemon}
            />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </>
  );
};
PokeList.prototype = {
  setSelectedPokemon: t.func,
};

export default PokeList;
