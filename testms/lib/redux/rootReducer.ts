/* Instruments */
import { counterSlice } from "./slices";
import { gallerySlice } from "@/app/REDUX/gallerySlice";

export const reducer = {
  counter: counterSlice.reducer,
  galleryReducer: gallerySlice.reducer,
};
