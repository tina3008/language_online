import { useId, useState } from "react";

import { Formik, Form, Field } from "formik";
import css from "./LangBlock.module.css";
import TrialLesson from "../TrialLesson/TrialLesson";



export default function LangBlock({ teacher }) {
  const { levels } = teacher;
  const [isModalOpen, setModalOpen] = useState(false);
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    setModalOpen(true); 
    actions.resetForm();
  };
  const closeModal = () => {
    setModalOpen(false);
  };
const initialValues = {
  level: "",
};
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div className={css.list}>
              {levels.map((level, index) => (
                <label
                  key={index}
                  className={`${css.langBtn} ${
                    values.level === level ? css.selected : ""
                  }`}
                >
                  <Field
                    type="radio"
                    name="level"
                    value={level}
                    id={`${levelFieldId}-${index}`}
                    className={css.hiddenCheck}
                  />
                  {level}
                </label>
              ))}
            </div>

            {values.level && (
              <button type="submit" className={css.btnSubmit}>
                Book trial lesson
              </button>
            )}
          </Form>
        )}
      </Formik>
      {isModalOpen && <TrialLesson onClose={closeModal} teacher={teacher} />}
    </div>
  );
}
