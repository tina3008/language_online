import css from "./TeacherList.module.css";

import CardHead from "../CardHead/CardHead";
import LangBlock from "../LangBlock/LangBlock";
import Detalis from "../Detalis/Detalis";
import { useState } from "react";

// import { addToFavorites, removeFromFavorites } from "../../redux/filtersSlice";

export default function TeacherListList({ filtrTeachers }) {
  const [showDetails, setShowDetails] = useState(false);
  //   const handleClick = (car) => {
  //     if (favorites.some((favorite) => favorite.id === car.id)) {
  //       removeFromFavorites(car);
  //     } else {
  //       addToFavorites(car);
  //     }
  //   };
 const handleReadMoreClick = (index) => {
   setShowDetails((prev) => ({
     ...prev,
     [index]: !prev[index], 
   }));
 };
  
  //  const initialValues = {
  //    level: showDetails ? "еее" : "", 
  //  };
  return (
    <ul className={css.list}>
      {filtrTeachers.map((teacher, index) => {
        const {
          name,
          surname,
          languages,
          avatar_url,
          lesson_info,
          conditions,
          reviews,
          experience,
        } = teacher;

        // const isActive = favorites.some((favorite) => favorite.id === teacher.id);
        return (
          <li key={index} className={css.card}>
            <div className={css.avatarWraper}>
              <svg width="12" height="12" className={css.pointPhoto}>
                <use href="/sprite.svg#icon-photo_point"></use>
              </svg>
              <img
                className={css.avatar}
                width={96}
                src={avatar_url}
                alt="Teacher's avatar"
              />
            </div>

            <div className={css.info}>
              <CardHead teacher={teacher} />
              <p className={css.teacherName}>
                {name} {surname}
              </p>
              <ul className={css.teachersInfo}>
                <li className={css.info}>
                  <div className={css.langInfo}>
                    <p className={css.nameInfo}>Speaks: </p>&nbsp;
                    <p className={css.leanguage}>{languages}</p>
                  </div>
                </li>
                <li className={css.info}>
                  <p className={css.description}>
                    <span className={css.nameInfo}>Lesson Info: </span>
                    {"  "}
                    {lesson_info}
                  </p>
                </li>
                <li className={css.info}>
                  <p className={css.description}>
                    <span className={css.nameInfo}>Conditions: </span>
                    {conditions}
                  </p>
                </li>
              </ul>
              {!showDetails[index] && (
                <button
                  onClick={() => handleReadMoreClick(index)}
                  className={css.buttonMore}
                >
                  Read more
                </button>
              )}
              {showDetails[index] && (
                <Detalis reviews={reviews} experience={experience} />
              )}
              <div className={css.lanBlock}>
                <LangBlock teacher={teacher} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
