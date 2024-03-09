import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactElement;
};

export const PrivateRoute = ({
  children,
}: PrivateRouteProps): React.ReactElement => {
  const isLogged = true;

  return isLogged ? children : <Navigate to="/login" />;
};
