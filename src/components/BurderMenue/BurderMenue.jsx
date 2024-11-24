import { NavLink } from "react-router-dom";
import css from "./BurderMenue.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function BurderMenue({ closeMenu }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    closeMenu();
  };
  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
    closeMenu();
  };
  const closeForms = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.burgerMenue}>
      <ul className={css.container}>
        <li>
          <NavLink to="/" className={css.link} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teachers" className={css.link} onClick={closeMenu}>
            Teachers
          </NavLink>
        </li>
        <li>
          {isLoggedIn ? (
            <NavLink to="/favorite" className={css.link}>
              Favorite
            </NavLink>
          ) : (
            ""
          )}
        </li>
        <li>
          <button
            className={css.loginBtn}
            type="button"
            onClick={handleLoginClick}
          >
            <svg className={css.logoImage} width="28" height="28">
              <use href="/sprite.svg#icon-log-in-01"></use>
            </svg>
            Log in
          </button>
        </li>
        <li>
          <button
            className={css.registrationBtn}
            type="button"
            onClick={handleRegistrationClick}
          >
            Registration
          </button>
        </li>
      </ul>
    </div>
  );
}
