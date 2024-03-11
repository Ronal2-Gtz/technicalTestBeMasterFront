import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRouter";
import { ContentCategory, ContentDetails, Home, Login } from "../pages";
import { Navbar } from "../components";

export const AppRouter = (): React.ReactElement => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
            </PublicRoute>
          }
        />
        {/* Private Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <>
              <Navbar/>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="category/:categoryId" element={<ContentCategory />} />
                <Route path="detail/:detailId" element={<ContentDetails />} />
                <Route path="/*" element={<Navigate to="/home" />} />
              </Routes>
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
