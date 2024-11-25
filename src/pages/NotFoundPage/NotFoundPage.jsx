import { Link } from "react-router-dom";
import css from "../HomePage/HomePage.module.css"

export default function NotFoundPage() {
  return (
    <p className={css.txtHome}>
      Sorry, page not found! Please go to{" "}
      <Link to="/" className={`${css.txtAccent} ${css.animateColorLite}`}>
        home page
      </Link>
      !
    </p>
  );
}
