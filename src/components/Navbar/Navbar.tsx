import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { RootState } from "../../store";

export const Navbar = (): React.ReactElement => {
  const status = useSelector((state: RootState) => state.auth.status);
  const isAuthenticating = useMemo(() => status === "authenticated", [status]);

  return (
    <header>
      <nav className="lg:px-6 py-2.5 shadow-2xl min-h-[16px] ">
        <div className="flex md:flex-wrap justify-between items-center w-full mx-auto max-w-screen-xl">
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
                onClick={() => console.log("cerrar sesion")}
                label="Cerrar sesión"
              ></Button>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};
