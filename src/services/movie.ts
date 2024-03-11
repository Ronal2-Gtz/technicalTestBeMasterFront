import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { type ResponseAttr, type ErrorAttr } from "./types";

const PATH = "https://technicaltestbemasterback-dev-jmzr.2.us-1.fl0.io";

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