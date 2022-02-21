import axios from "axios";
import useSWR from "swr";
const BASE_URL = "api/pokemon";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const usePokemons = () => {
  // TODO: Implement infinit scroll pagination and move filters to backend
  const { data, error, size, setSize } = useSWR(`${BASE_URL}/all`, fetcher);

  return {
    pokemons: data?.results || [],
    isLoading: !data && !error,
    error,
    size,
    setSize,
  };
};

export const usePokemon = (id) => {
  const { data, error } = useSWR(id ? `${BASE_URL}/${id}` : null, fetcher);

  return {
    pokemon: data || {},
    isLoading: !data && !error,
    error,
  };
};
