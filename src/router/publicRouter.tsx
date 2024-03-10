import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";

type PublicRouteProps = {
  children: React.ReactElement;
};

export const PublicRoute = ({
  children,
}: PublicRouteProps): React.ReactElement => {
  const status = useSelector((state: RootState) => state.auth.status);
  const isAuthenticating = useMemo(
    () => status === "not-authenticated",
    [status]
  );
  return isAuthenticating ? children : <Navigate to="/home" />;
};
