import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import type { NextComponentType } from "next";
import { useAppSelector, useAppDispatch } from "@stores/hooks";
import {
  selectBrandList,
  setYearList,
  setModelList,
  selectBrand,
  setBrand,
  setModel,
  setYear,
} from "./fipe-form-slice";

const AutocompleteBrand: NextComponentType = () => {
  const options = useAppSelector(selectBrandList);
  const value = useAppSelector(selectBrand);
  const dispatch = useAppDispatch();

  const handleSelectChange = (event: any, newValue: any) => {
    dispatch(setBrand(newValue));
    dispatch(setModel(null));
    dispatch(setModelList([]));
    dispatch(setYear(null));
    dispatch(setYearList([]));
  };

  return (
    <Autocomplete
      noOptionsText="Nenhuma opção encontrada!"
      value={value}
      onChange={handleSelectChange}
      getOptionLabel={(option) => option.nome}
      options={options}
      sx={{ marginBottom: "16px", width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Marca" />}
    />
  );
};

export { AutocompleteBrand };
