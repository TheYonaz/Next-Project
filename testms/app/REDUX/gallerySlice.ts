import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GalleryState {
  value: number;
}

// Define the initial state using that type
const initialState: GalleryState = {
  value: 0,
};

export const gallerySlice = createSlice({
  name: "currPage",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = gallerySlice.actions;

// Type the state parameter correctly
export const selectCurrPage = (state: { currPage: GalleryState }) =>
  state.currPage.value;

export default gallerySlice.reducer;
