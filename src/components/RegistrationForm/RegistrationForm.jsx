import css from "./RegistrationForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
// import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import { closeModal } from "../../redux/modal/slice";
import { selectActiveModal } from "../../redux/modal/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function RegistrationForm({ closeMenu }) {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  const activeModal = useSelector(selectActiveModal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  if (activeModal !== "registration") return null;

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    actions.resetForm();
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };
  return (
    <div className={css.modalOverlay} onClick={handleClose}>
      <div className={css.registrationPopUp}>
        <button className={css.closeButton} onClick={handleClose}>
          <svg width="32" height="32" className={css.imgClosed}>
            <use href="/sprite.svg#icon-x"></use>
          </svg>
        </button>
        <h2 className={css.regTitle}>Registration</h2>
        <p className={css.regTxt}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationControl}
        >
          <Form className={css.form} autoComplete="off">
            <div className={css.fialdStyle}>
              <Field
                type="text"
                name="name"
                className={css.field}
                placeholder="Name"
              />
              <ErrorMessage name="name" className={css.errorMessage} />

              <Field
                type="email"
                name="email"
                className={css.field}
                placeholder="Email"
              />
              <ErrorMessage name="email" className={css.errField} />

              <Field
                type="password"
                name="password"
                className={css.field}
                placeholder="Password"
              />
              <ErrorMessage name="password" className={css.errField} />
            </div>
            <button type="submit" className={css.btn}>
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
