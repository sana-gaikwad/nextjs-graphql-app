import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: string;
  jobTitle: string;
};
const initialState: UserState = {
  username: "",
  jobTitle: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (_, action: PayloadAction<UserState>) => {
      return {
        username: action.payload.username,
        jobTitle: action.payload.jobTitle,
      };
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
