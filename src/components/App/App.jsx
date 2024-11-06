import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { selectLoading, selectError } from "../../redux/selectors.js";
import { HelmetProvider } from "react-helmet-async";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const TeachersPage = lazy(() =>
  import("../../pages/TeachersPage/TeachersPage.jsx")
);
const Detalis = lazy(() => import("../Detalis/Detalis.jsx"));
// const Burger = lazy(() => import("../BurderMenue/BurderMenue.jsx"));

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <div>
      <HelmetProvider>
        <Navigation />
        {loading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />}>
              <Route path="detelis" element={<Detalis />} />
            </Route>
            {/* <Route path="/burger" element={<Burger />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </div>
  );
}
