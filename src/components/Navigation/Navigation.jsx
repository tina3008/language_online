import { NavLink, useNavigate } from "react-router-dom";
import css from "./Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import BurderMenue from "../BurderMenue/BurderMenue";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { openModal } from "../../redux/modal/slice";
import { selectActiveModal } from "../../redux/modal/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const activeModal = useSelector(selectActiveModal);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);


  const handleRegistation = () => {
    dispatch(openModal("registration"));
  };
  const handleLogin = () => {
    dispatch(openModal("login"));
  };
  const handleLogout = () => {
    dispatch(logOut()).then(() => {
      localStorage.clear();
      window.location.reload();
    });
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={css.header}>
      <div className={css.wrapper}>
        <NavLink to="/" className={css.logo}>
          <svg className={css.logoImage} width="28" height="28">
            <use href="/sprite.svg#icon-ukraine"></use>
          </svg>
          <p className={css.logoTxt}>LearnLingo</p>
        </NavLink>
        <nav>
          <ul className={css.container}>
            <li>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/teachers" className={css.link}>
                Teachers
              </NavLink>
            </li>
            <li>
              {isLoggedIn && (
                <NavLink to="/favorite" className={css.link}>
                  Favorite
                </NavLink>
              )}
            </li>
          </ul>
        </nav>

        {isLoggedIn ? (
          <button
            className={css.registrationBtn}
            type="button"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : (
          <div className={css.autentification}>
            <button
              className={css.loginBtn}
              type="button"
              onClick={handleLogin}
            >
              <svg className={css.logoImage} width="28" height="28">
                <use href="/sprite.svg#icon-log-in-01"></use>
              </svg>
              Log in
            </button>
            <button
              className={css.registrationBtn}
              type="button"
              onClick={handleRegistation}
            >
              Registration
            </button>
          </div>
        )}

        <button
          className={css.burgerBtn}
          type="button"
          onClick={handleMenuToggle}
        >
          {menuOpen ? (
            <svg width="28" height="28">
              <use href="/sprite.svg#icon-x" className={css.xImage}></use>
            </svg>
          ) : (
            <GiHamburgerMenu size="28" />
          )}
        </button>
      </div>
      {menuOpen && <BurderMenue closeMenu={handleMenuToggle} />}
      {activeModal === "registration" && <RegistrationForm />}
      {activeModal === "login" && <LoginForm />}
    </section>
  );
}
