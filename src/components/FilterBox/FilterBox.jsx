import css from "./FilterBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/teachers/selectors";
import { useId } from "react";

export default function FilterBox() {
  const dispatch = useDispatch();
  const languageFieldId = useId();
  const levelFieldId = useId();
  const priceFieldId = useId();

  const filters = useSelector(selectFilter);

  const handleFilterChange = (key, value) => {
    dispatch(setStatusFilter({ [key]: value }));
  };

  return (
    <div className={css.filtresBlock}>
      <div className={css.fieldBlock}>
        <label htmlFor={languageFieldId} className={css.filtrlable}>
          Languages
        </label>
        <div className={css.filtrFieldPadding} width="221">
          <select
            className={css.filtrField}
            name="languages"
            id={languageFieldId}
            value={filters.values.languages}
            onChange={(e) => handleFilterChange("languages", e.target.value)}
          >
            <option value="">All</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Mandarin Chinese">Mandarin Chinese</option>
            <option value="Italian">Italian</option>
            <option value="German">German</option>
            <option value="Korean">Korean</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>
      <div className={css.fieldBlock} width="198">
        <label htmlFor={levelFieldId} className={css.filtrlable}>
          Level of knowledge
        </label>
        <div className={css.filtrFieldPadding}>
          <select
            className={css.filtrField}
            name="level"
            id={levelFieldId}
            value={filters.values.levels}
            onChange={(e) => handleFilterChange("levels", e.target.value)}
          >
            <option value="">All</option>
            <option value="A1 Beginner">A1 Beginner</option>
            <option value="A2 Elementary">A2 Elementary</option>
            <option value="B1 Intermediate">B1 Intermediate</option>
            <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            <option value="C1 Advanced">C1 Advanced</option>
            <option value="C2 Proficient">C2 Proficient</option>
          </select>
        </div>
      </div>
      <div className={css.fieldBlock}>
        <label htmlFor={priceFieldId} className={css.filtrlable}>
          Price
        </label>
        <div className={css.filtrFieldPadding} width="124">
          <select
            className={css.filtrField}
            name="price"
            id={priceFieldId}
            value={filters.values.price_per_hour}
            onChange={(e) =>
              handleFilterChange("price_per_hour", e.target.value)
            }
          >
            <option value="">All</option>
            <option value="25">25$</option>
            <option value="27">27$</option>
            <option value="28">28$</option>
            <option value="30">30$</option>
            <option value="35">35$</option>
          </select>
        </div>
      </div>
    </div>
  );
}
