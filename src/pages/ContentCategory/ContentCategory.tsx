import { useParams } from "react-router-dom";
import { useGetMoviesByCategory } from "../../services/category";
import { Loading } from "../../components/Loading/Loading";

type RouteParams = {
  categoryId: string;
};

type ContentCategoryProps = {};

export const ContentCategory = ({}: ContentCategoryProps): React.ReactElement => {
    const { categoryId } = useParams<RouteParams>();
    const { data, isLoading, isFetching } = useGetMoviesByCategory(categoryId!);

    if (isLoading || isFetching) {
      return <Loading />;
    }

    console.log(data);

    return (
      <>
        <h1>React TS FC Component</h1>
        <div>ContentCategory</div>
      </>
    );
  };
