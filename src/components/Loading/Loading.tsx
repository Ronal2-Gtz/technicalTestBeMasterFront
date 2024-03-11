import "./loading.css";

type LoadingProps = {};

export const Loading = ({}: LoadingProps): React.ReactElement => {
  return (
    <div className=" w-screen h-screen flex justify-center mt-80 ">
      <div className="loader" role="alert" aria-live="assertive"></div>
    </div>
  );
};
