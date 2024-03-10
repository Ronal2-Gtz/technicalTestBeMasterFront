import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  children: React.ReactElement;
};

export const PublicRoute = ({
  children,
}: PublicRouteProps): React.ReactElement => {
  const isLogged = true;

  return !isLogged ? children : <Navigate to="/home" />;
};
