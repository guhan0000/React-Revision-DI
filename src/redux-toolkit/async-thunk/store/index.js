import { configureStore } from "@reduxjs/toolkit";
import prodReducer from "./slice/prodSlice";
export default configureStore({ reducer: { prod: prodReducer } });
