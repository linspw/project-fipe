import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores/store";

export type FormField = {
  codigo: string;
  nome: string;
};

export type FormState = {
  year: FormField | null;
  brand: FormField | null;
  model: FormField | null;
  yearList: FormField[];
  brandList: FormField[];
  modelList: FormField[];
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
