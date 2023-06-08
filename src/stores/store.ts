// library imports
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// slice imports
import cryptosSlice from "./cryptos/cryptosSlice";
import settingsSlice from "./settings/settingsSlice";

// create combined reducer from slice reducers
/* const combinedReducer = combineReducers({
  settings: settingsSlice,
}); */

// create root reducer from combined reducer
/* const rootReducer = (state: any, action: AnyAction) => {
  return combinedReducer(state, action);
}; */

// configure store
const store = configureStore({
  reducer: {
    settings: settingsSlice,
    cryptos: cryptosSlice,
  },
});

// exports
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
