import css from "./RegistrationForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";

export default function RegistrationForm({ closeForm }) {
  //   const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  //   const handleSubmit = (values, actions) => {
  //     dispatch(register(values))
  //       .unwrap()
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));

  //     actions.resetForm();
  //   };

  return (
    <div className={css.registrationPopUp}>
      <h2 classname={css.regTitle}>Registration</h2>
      <p className={css.regTxt}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        //   onSubmit={handleSubmit}
        validationSchema={validationControl}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.fialdStyle}>
            <div>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Name"
                className={css.field}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.errMessage}
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Email"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.errMessage}
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                id={passwordFieldId}
                placeholder="password*"
                className={css.field}
              />
              <button
                type="button"
                className={css.eyeBtn}
                onClick={(event) => {
                  event.preventDefault();
                  toggle("password");
                }}
              >
                {showPassword.password ? (
                  <svg className={css.btnEye} width="28" height="28">
                    <use href="/sprite.svg#icon-eye-off"></use>
                  </svg>
                ) : (
                  <HiOutlineEyeOff className={css.btnEye} />
                )}
              </button>
              <ErrorMessage
                name="password"
                component="span"
                className={css.errMessage}
              />
            </div>
            <button type="submit" className={css.btn}>
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
