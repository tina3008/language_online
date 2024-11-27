import Catalog from "../../components/Catalog/Catalog.jsx";
import css from "../TeachersPage/TeachersPage.module.css";

export default function FavoritePage() {
  return (
    <section className={css.teachersContainer}>
     <Catalog showFavoritesOnly={true} />
    </section>
  );
}
