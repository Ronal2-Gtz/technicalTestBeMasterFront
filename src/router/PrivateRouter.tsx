import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";

type PrivateRouteProps = {
  children: React.ReactElement;
};

export const PrivateRoute = ({
  children,
}: PrivateRouteProps): React.ReactElement => {
  const status = useSelector((state: RootState) => state.auth.status);
  const isAuthenticating = useMemo(() => status === "authenticated", [status]);

  return isAuthenticating ? children : <Navigate to="/login" />;
};
