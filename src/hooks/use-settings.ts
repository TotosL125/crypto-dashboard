// library imports
import { useCallback } from "react";

// redux imports
import { toggleSettings } from "../stores/settings/settingsSlice";
import { useAppDispatch } from "./hooks";

const useSettings = () => {
  const dispatch = useAppDispatch(); // dispatch actions

  // settings handler function
  const settingsHandler = useCallback(() => {
    dispatch(toggleSettings());
  }, [dispatch]); // defined once

  return settingsHandler; // return function
};

export default useSettings;
