import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { RootState } from "../../store";
import { logout } from "../../store/slices/auth/authSlice";

export const Navbar = (): React.ReactElement => {
  const dispatch = useDispatch()
  const status = useSelector((state: RootState) => state.auth.status);
  const isAuthenticating = useMemo(() => status === "authenticated", [status]);

  const handleLogout = (): void => {
		dispatch(logout(''))
		localStorage.clear()
	}

  return (
    <header>
        <div className="flex md:flex-wrap justify-between items-center w-full px-5 md:px-24 mx-auto py-3 absolute">
          <Link to='home' className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              BeMaster
            </span>
          </Link>
          {isAuthenticating ? (
            <div className="flex flex-col md:flex-row md:items-center lg:order-2">
              <Link
                to="home"
                className=" focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Home
              </Link>
              <Button
                onClick={handleLogout}
                label="Cerrar sesión"
              ></Button>
            </div>
          ) : null}
        </div>
    </header>
  );
};
