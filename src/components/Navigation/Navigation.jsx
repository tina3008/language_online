import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import BurderMenue from "../BurderMenue/BurderMenue";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          </ul>
        </nav>
        <div className={css.autentification}>
          <button className={css.loginBtn} type="button">
            <svg className={css.logoImage} width="28" height="28">
              <use href="/sprite.svg#icon-log-in-01"></use>
            </svg>
            Log in
          </button>
          <button className={css.registrationBtn} type="button">
            Registration
          </button>
        </div>

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
    </section>
  );
}
