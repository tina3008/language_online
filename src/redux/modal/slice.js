import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    activeModal: null, // Идентификатор активного модального окна
  },
  reducers: {
    openModal: (state, action) => {
      state.activeModal = action.payload; // Устанавливаем идентификатор окна
    },
    closeModal: (state) => {
      state.activeModal = null; // Закрываем модальное окно
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

// Селекторы
export const selectActiveModal = (state) => state.modal.activeModal;
export const selectIsModalOpen = (state) => state.modal.activeModal;
