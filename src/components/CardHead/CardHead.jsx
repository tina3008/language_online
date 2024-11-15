import css from "./CardHead.module.css"
import { LuBookOpen } from "react-icons/lu";

export default function CardHead({ teacher }) {
    const { 
      rating,    
      price_per_hour,
      lessons_done,          
    } = teacher;
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
      <button type="button" className={css.hurtButton}>
        <svg width="26" height="26" className={css.hurt}>
          <use href="/sprite.svg#icon-heart"></use>
        </svg>
      </button>
    </div>
  );
}