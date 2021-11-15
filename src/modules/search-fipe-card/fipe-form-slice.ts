import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores/store";
import type { FormState, FormField } from "@app-types/form-types";

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
  reducers: {
    setYear: (state, action: PayloadAction<FormField | null>) => {
      state.year = action.payload;
    },
    setBrand: (state, action: PayloadAction<FormField | null>) => {
      state.brand = action.payload;
    },
    setModel: (state, action: PayloadAction<FormField | null>) => {
      state.model = action.payload;
    },
    setYearList: (state, action: PayloadAction<FormField[]>) => {
      state.yearList = action.payload;
    },
    setBrandList: (state, action: PayloadAction<FormField[]>) => {
      state.brandList = action.payload;
    },
    setModelList: (state, action: PayloadAction<FormField[]>) => {
      state.modelList = action.payload;
    },
  },
});

export const {
  setYear,
  setBrand,
  setModel,
  setYearList,
  setBrandList,
  setModelList,
} = fipeForm.actions;

export const selectYear = (state: RootState) => state.fipeForm.year;
export const selectBrand = (state: RootState) => state.fipeForm.brand;
export const selectModel = (state: RootState) => state.fipeForm.model;

export const selectYearList = (state: RootState) => state.fipeForm.yearList;
export const selectBrandList = (state: RootState) => state.fipeForm.brandList;
export const selectModelList = (state: RootState) => state.fipeForm.modelList;

export const selectFilterObject = (state: RootState) => ({
  year: state.fipeForm.year?.codigo,
  brand: state.fipeForm.brand?.codigo,
  model: state.fipeForm.model?.codigo,
});

export const selectCannotSearchFIPETable = (state: RootState) =>
  !(state.fipeForm.year && state.fipeForm.brand && state.fipeForm.model);
export const selectCannotSearchModel = (state: RootState) =>
  !state.fipeForm.brand;
export const selectCannotSearchYear = (state: RootState) =>
  !state.fipeForm.model || !state.fipeForm.brand;

export default fipeForm.reducer;
