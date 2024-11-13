import FeedbackForm from "../FeedbackForm/FeedbackForm";
import css from "./TrialLesson.module.css";
import React, { useEffect } from "react";

export default function TrialLesson({ onClose, teacher }) {
    const { name, surname, avatar_url } = teacher;

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);

   
    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

  return (
    <div className={css.modalOverlay} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeButton}>
          <svg width="32" height="32" className={css.imgClosed}>
            <use href="/sprite.svg#icon-x"></use>
          </svg>
        </button>
        <h2 className={css.title}>Book trial lesson</h2>
        <p className={css.description}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={css.teacher}>
          <img
            className={css.avatar}
            width={96}
            src={avatar_url}
            alt="Teacher's avatar"
          />
          <div className={css.teacherName}>
            <p className={css.yurTeacher}>Your teacher</p>
            <p className={css.name}>
              {name} {surname}
            </p>
          </div>
        </div>

        <h3 className={css.question}>
          What is your main reason for learning English?
        </h3>
        <FeedbackForm />
      </div>
    </div>
  );
}
