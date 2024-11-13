import css from "./Detalis.module.css";
import { BsPersonCircle } from "react-icons/bs";

export default function Detalis({ reviews, experience }) {
 
  return (
    <div className={css.detalBock}>
      <p className={css.experience}>{experience}</p>
      <ul className={css.review}>
        {reviews.map((review, index) => {
          const { reviewer_name, reviewer_rating, comment } = review;
          return (
            <li key={index} className={css.list}>
              <div classname={css.avatar}>
                <BsPersonCircle size="44" />
              </div>
              <div className={css.txtBlok}>
                <p>{reviewer_name}</p>
                <div className="raiting">
                  <svg width="12" height="12" className={css.pointPhoto}>
                    <use href="/sprite.svg#icon-star"></use>
                  </svg>
                  <p> {reviewer_rating}</p>
                </div>
              </div>

              <p>{comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
