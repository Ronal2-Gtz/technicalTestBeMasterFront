import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetMoviesByCategory } from "../../services/category";
import { Loading } from "../../components/Loading/Loading";
import {
  logoDisney,
  logoMarvel,
  logoNatGeo,
  logoPixar,
  logoStarWars,
} from "../../assets";
import { Button } from "../../components";

type RouteParams = {
  categoryId: string;
};

export const getImage:Record<string, string> = {
  disney: logoDisney,
  pixar: logoPixar,
  natgeo: logoNatGeo,
  marvel: logoMarvel,
  starwars: logoStarWars,
}

export const ContentCategory = (): React.ReactElement => {
    const navigate = useNavigate();
    const { categoryId } = useParams<RouteParams>();
    const { data, isLoading, isFetching } = useGetMoviesByCategory(categoryId!);

    if (isLoading || isFetching) {
      return <Loading />;
    }

    return (
      <div className="flex flex-col justify-center items-center">
        <img
          src={getImage[categoryId as string]}
          alt="icon"
          className="w-3/12"
        />
        <div className="w-full flex items-center justify-center flex-wrap gap-5 ">
          {data?.movies.map((movie) => (
            <Link
              to={`/detail/${categoryId}/${movie.path}`}
              className="flex items-center justify-center"
            >
              <div
                className={` w-10/12 bg-[${movie.image}] rounded-2xl hover:scale-110 transition duration-500 cursor-pointer object-cover shadow-2xl`}
              >
                <img
                  src={movie.image}
                  alt="movie image"
                  className="w-full h-full rounded-md"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="my-10 w-2/12">
          <Button onClick={() => navigate("/home")} label="Volver" />
        </div>
      </div>
    );
  };
