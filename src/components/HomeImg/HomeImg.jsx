import css from "./HomeImg.module.css"
import { FaApple } from "react-icons/fa";

export default function HomeImg() {
    
    return (
      <div className={css.homeImg}>
        <img
          src="/head-girl-yellow.png"
          alt="head-girl"
          className={css.imgHead}
        />
        <div className={css.imgMac}>
          {/* <FaApple className={css.imgApple} size="56" /> */}
          <svg width="46" height="56" className={css.imgApple}>
            <use href="/sprite.svg#icon-apple-logo" ></use>
          </svg>
        </div>
      </div>
    );
}