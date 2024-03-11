import React from "react";
import { useGetMovie } from "../../services/movie";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { Button } from "../../components";

type RouteParams = {
  category: string;
  movieId: string;
};

const gradient =
  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6278886554621849) 17%, rgba(255,255,255,0) 100%)";

export const ContentDetails = (): React.ReactElement => {
  const navigate = useNavigate();
  const { category, movieId } = useParams<RouteParams>();
  console.log(category);
  const { data, isLoading, isFetching } = useGetMovie(category!, movieId!);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  console.log(data?.movie.img);
  return (
    <div
      style={{
        background: `${gradient},url('${data?.movie.img}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 72px)",
      }}
    >
      <div className=" w-full md:w-5/12 h-full flex flex-col items-start justify-center gap-7 p-10">
        <h1 className=" font-extrabold text-4xl">{data?.movie.name}</h1>
        <p>{data?.movie.dateAndTime}</p>
        <div>
          <h1 className=" font-bold text-2xl">Descripcion</h1>
          <p>{data?.movie.description}</p>
        </div>
        <Button onClick={() => navigate(`/category/${category}`)} label="Ir a categorias" ></Button>
      </div>
    </div>
  );
};
