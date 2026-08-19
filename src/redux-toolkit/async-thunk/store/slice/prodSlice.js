import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";
// const initialState = {
//   list: [],
//   status: "idle",
//   error: null,
// };
export const fetchProds = createAsyncThunk("prod/fetchProds", async () => {
  const response = await api.get("/api/items");

  console.log("response.data =", response.data);
  console.log("is array =", Array.isArray(response.data));
  return response.data.data;
});
const prodSlice = createSlice({
  name: "prod",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default prodSlice.reducer;
