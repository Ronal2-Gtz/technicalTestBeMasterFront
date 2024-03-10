import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type PrivateRouteProps = {
  children: React.ReactElement;
};

export const PrivateRoute = ({
  children,
}: PrivateRouteProps): React.ReactElement => {
  const status  = useSelector((state: RootState) => state.auth.status );

  return status === 'authenticated' ? children : <Navigate to="/login" />;
};
