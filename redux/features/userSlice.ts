import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: UserState;
};
type UserState = {
  username: string;
  jobTitle: string;
};

const initialState: InitialState = {
  value: {
    username: "",
    jobTitle: "",
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (_, action: PayloadAction<UserState>) => {
      return {
        value: {
          username: action.payload.username,
          jobTitle: action.payload.jobTitle,
        },
      };
    },
  },
});

export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
