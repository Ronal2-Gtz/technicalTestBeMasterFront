import { useParams } from "react-router-dom";
import { useGetMoviesByCategory } from "../../services/category";

type RouteParams = {
  categoryId: string;
};

type ContentCategoryProps = {};

export const ContentCategory = ({}: ContentCategoryProps): React.ReactElement => {
  const { categoryId } = useParams<RouteParams>();

  console.log(categoryId)

  const { data, isError, isLoading } = useGetMoviesByCategory(categoryId!);

  console.log(data)

    return (
      <>
        <h1>React TS FC Component</h1>
        <div>ContentCategory</div>
      </>
    );
  };
