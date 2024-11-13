import css from "./FeedbackForm.module.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function FeedbackForm() {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    phone: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
    level: Yup.string()
      .oneOf([
        "Career and business",
        "Lesson for kids",
        "Living abroad",
        "Exams and coursework",
        "Culture, travel or hobby",
      ])
      .required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    level: "Career and business",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const phoneFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.fullform}>
        <div className={css.radioBlock}>
          <label>
            <Field type="radio" name="level" value="Career and business" />
            <svg className={css.radioIcon}>
              <use href="/sprite.svg#icon--RadioButton-off"></use>
            </svg>
            Career and business
          </label>
          <label>
            <Field type="radio" name="level" value="Lesson for kids" />
            <svg className={css.radioIcon}>
              <use href="/sprite.svg#icon--RadioButton-off"></use>
            </svg>
            Lesson for kids
          </label>
          <label>
            <Field type="radio" name="level" value="Living abroad" />
            <svg className={css.radioIcon}>
              <use href="/sprite.svg#icon--RadioButton-off"></use>
            </svg>
            Living abroad
          </label>
          <label>
            <Field type="radio" name="level" value="Exams and coursework" />
            <svg className={css.radioIcon}>
              <use href="/sprite.svg#icon--RadioButton-off"></use>
            </svg>
            Exams and coursework
          </label>
          <label>
            <Field type="radio" name="level" value="Culture, travel or hobby" />
            <svg className={css.radioIcon}>
              <use href="/sprite.svg#icon--RadioButton-off"></use>
            </svg>
            Culture, travel or hobby
          </label>
          <ErrorMessage
            name="level"
            component="span"
            className={css.errMessage}
          />
        </div>
        <div className={css.fieldBlock}>
          <div>
            <Field
              type="text"
              name="username"
              id={nameFieldId}
              placeholder="Full Name"
              className={css.field}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.errMessage}
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              className={css.field}
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errMessage}
            />
          </div>

          <div>
            <Field
              type="tel"
              name="phone"
              id={phoneFieldId}
              className={css.field}
              placeholder="Phone number"
            />
            <ErrorMessage
              name="phone"
              component="span"
              className={css.errMessage}
            />
          </div>
        </div>

        <button type="submit" className={css.submtBook}>
          Book
        </button>
      </Form>
    </Formik>
  );
}
