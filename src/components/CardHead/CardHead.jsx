import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./CardHead.module.css";
import { LuBookOpen } from "react-icons/lu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/filters/slice";

export default function CardHead({ teacher }) {
  const { id, rating, price_per_hour, lessons_done } = teacher;

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.filters.favorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // const isFavorite = favorites.some((favorite) => favorite.id === id);
const isFavorite = favorites.includes(id);
const handleClick = () => {
  if (!isLoggedIn) {
    alert("Only authorized users can perform this action.");
    return;
  }

  if (isFavorite) {
    dispatch(removeFromFavorites(id)); // Используем индекс
  } else {
    dispatch(addToFavorites(id)); // Используем индекс
  }
};

  return (
    <div className={css.headCard}>
      <div className={css.bigBlock}>
        <p className={css.lang}>Languages</p>
        <ul className={css.block}>
          <li className={css.list}>
            <LuBookOpen className={css.book} />
            <p className={css.txt}>Lessons online</p>
          </li>
          <li className={css.list}>
            <p className={css.txt}>Lessons done: {lessons_done}</p>
          </li>
          <li className={css.list}>
            <svg width="16" height="16" className={css.star}>
              <use href="/sprite.svg#icon-star"></use>
            </svg>
            <p className={css.txt}>Rating: {rating}</p>
          </li>
          <li className={css.list}>
            <p className={css.txt}>
              Price / 1 hour:{" "}
              <span className={css.price}>{price_per_hour}$</span>
            </p>
          </li>
        </ul>
      </div>

      <button className={css.hurtButton} onClick={handleClick}>
        <svg
          width="26"
          height="26"
          className={`${css.hurt} ${isFavorite ? css.favorite : ""}`}
        >
          <use href="/sprite.svg#icon-heart"></use>
        </svg>
      </button>
    </div>
  );
}
