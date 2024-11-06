// import SearchBox from "../SearchBox/SearchBox";
// import CarList from "../CarList/CarList";
// import { fetchCatalog } from "../../redux/operations";
// import {
//   selectError,
//   selectLoading,
// } from "../../redux/selectors";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Loader from "../Loader/Loader";
// import css from "./Catalog.module.css";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import { visibleCars } from "../../redux/slice";

// function Catalog() {
//   const ITEMS_PER_LOAD = 3;

//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);
//   const allCars = useSelector(visibleCars);
//   const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

//   useEffect(() => {
//     dispatch(fetchCatalog());
//   }, [dispatch]);

//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + ITEMS_PER_LOAD);
//   };

//   const currentCars = allCars.slice(0, visibleCount);


//   return (
//     <section className={css.fullPage}>
//       <div className={css.SearchBox}>
//         <SearchBox />
//       </div>

//       <div className={css.fullCarList}>
//         <div className={css.carList}>
//           {currentCars.length > 0 && <CarList filtrCars={currentCars} />}
//         </div>
//         <LoadMoreBtn onClick={handleLoadMore} />
//       </div>
//       {isLoading && <Loader>Loading message</Loader>}
//       {isError && <ErrorMessage />}
//     </section>
//   );
// }

// export default Catalog;
