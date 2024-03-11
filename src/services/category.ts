import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { type ResponseAttr, type ErrorAttr } from "./types";

const PATH = "https://technicaltestbemasterback-dev-jmzr.2.us-1.fl0.io";

type Movie = {
  path: string;
  image: string;
}

type MovieByCategoryResponse = {
  movies: Array<Movie>
}

export const useGetMoviesByCategory = (
  category: string
): UseQueryResult<MovieByCategoryResponse, ErrorAttr> => {
  return useQuery(
    ["moviesCategory", category],
    async () => {
      const { data } = await axios.get<ResponseAttr<MovieByCategoryResponse>>(
        `${PATH}/movies/${category}`
      );

      return data;
    },
    {
      enabled: !!category,
    }
  );
};