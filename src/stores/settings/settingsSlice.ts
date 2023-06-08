// library imports
import { createSlice } from "@reduxjs/toolkit";

// define initial state
interface Isettings {
  showSettings: boolean;
}
const initialState: Isettings = {
  showSettings: false,
};

// create state slice
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSettings(state) {
      state.showSettings = !state.showSettings;
    },
  },
});

// exports
export const { toggleSettings } = settingsSlice.actions; // action names
export default settingsSlice.reducer; // reducer
