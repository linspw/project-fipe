import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import fipeFormReducer from "@modules/search-fipe-card/fipe-form-slice";

export const store = configureStore({
  reducer: {
    fipeForm: fipeFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
