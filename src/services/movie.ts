import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { type ResponseAttr, type ErrorAttr } from "./types";

const PATH = "http://localhost:3000";

type MovieResponse = {
    movie: {
        description: string;
        img: string;
        name: string;
        dateAndTime: string;
        path: string;
    }
}

export const useGetMovie = (
    category: string,
    movieId: string
): UseQueryResult<MovieResponse, ErrorAttr> => {
    return useQuery(
        ["movie", movieId],
        async () => {
            const { data } = await axios.get<ResponseAttr<MovieResponse>>(
                `${PATH}/movies/${category}/${movieId}`
            );

            return data;
        },
        {
            enabled: !!category && !!movieId,
        }
    );
};