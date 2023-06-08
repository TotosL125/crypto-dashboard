// library imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type import
import dataObj from "../../assets/dataType";

// define initial state
interface Icryptos {
  isLoading: boolean;
  error: string | undefined;
  urlValues: { currency: string; perPage: string };
  cryptos: dataObj[];
}

const initialState: Icryptos = {
  isLoading: false,
  error: undefined,
  urlValues: { currency: "", perPage: "" },
  cryptos: [],
};

const cryptosSlice = createSlice({
  name: "cryptos",
  initialState,
  reducers: {
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    resetError(state) {
      state.error = undefined;
    },
    setUrlValues(state, action: PayloadAction<Icryptos["urlValues"]>) {
      state.urlValues = action.payload;
    },
  },
});

// exports
export const { toggleIsLoading, setError, resetError } = cryptosSlice.actions;
export default cryptosSlice.reducer;
