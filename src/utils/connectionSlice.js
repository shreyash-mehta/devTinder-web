import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnnection: (state, action) => {
      return action.payload;
    },
    removeConnection: (state, action) => {
      return null;
    },
  },
});

export default connectionSlice.reducer;
export const { addConnnection, removeConnection } = connectionSlice.actions;
