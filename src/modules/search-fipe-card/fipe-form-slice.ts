import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores/store";

// declaring the types for our state
export type FormState = {
  year: any;
  brand: any;
  model: any;
  yearList: any;
  brandList: any;
  modelList: any;
};

const initialState: FormState = {
  year: null,
  brand: null,
  model: null,
  yearList: [],
  brandList: [],
  modelList: [],
};

export const fipeForm = createSlice({
  name: "fipeForm",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions.
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app.
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
  reducers: {
    setYear: (state, action: PayloadAction<any>) => {
      state.year = action.payload;
    },
    setBrand: (state, action: PayloadAction<any>) => {
      state.brand = action.payload;
    },
    setModel: (state, action: PayloadAction<any>) => {
      state.model = action.payload;
    },
    setYearList: (state, action: PayloadAction<any>) => {
      state.yearList = action.payload;
    },
    setBrandList: (state, action: PayloadAction<any>) => {
      state.brandList = action.payload;
    },
    setModelList: (state, action: PayloadAction<any>) => {
      state.modelList = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  setYear,
  setBrand,
  setModel,
  setYearList,
  setBrandList,
  setModelList,
} = fipeForm.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectYear = (state: RootState) => state.fipeForm.year;
export const selectBrand = (state: RootState) => state.fipeForm.brand;
export const selectModel = (state: RootState) => state.fipeForm.model;
export const selectYearList = (state: RootState) => state.fipeForm.yearList;
export const selectBrandList = (state: RootState) => state.fipeForm.brandList;
export const selectModelList = (state: RootState) => state.fipeForm.modelList;
export const selectCannotSearchFIPETable = (state: RootState) =>
  !(state.fipeForm.year && state.fipeForm.brand && state.fipeForm.model);
export const selectCannotSearchModel = (state: RootState) =>
  !state.fipeForm.brand;
export const selectCannotSearchYear = (state: RootState) =>
  !state.fipeForm.model;

// exporting the reducer here, as we need to add this to the store
export default fipeForm.reducer;
