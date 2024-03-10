import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type PublicRouteProps = {
  children: React.ReactElement;
};

export const PublicRoute = ({
  children,
}: PublicRouteProps): React.ReactElement => {
  const status = useSelector((state: RootState) => state.auth.status);

  return status === "not-authenticated" ? children : <Navigate to="/home" />;
};
