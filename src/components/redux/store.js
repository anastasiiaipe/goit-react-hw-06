import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: {
      name: "",
    },
  },
});
export default store;
