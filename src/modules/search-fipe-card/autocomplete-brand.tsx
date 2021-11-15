import React from "react";
import type { FormField } from "@app-types/form-types";
import type { SyntheticEvent } from "react";
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

  const handleSelectChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: FormField | null
  ) => {
    dispatch(setBrand(newValue));
    dispatch(setModel(null));
    dispatch(setModelList([]));
    dispatch(setYear(null));
    dispatch(setYearList([]));
  };

  return (
    <Autocomplete
      id="autocomplete-brand"
      getOptionLabel={(option) => option.nome}
      loading={true}
      loadingText="Carregando"
      noOptionsText="Nenhuma opção encontrada!"
      onChange={handleSelectChange}
      options={options}
      renderInput={(params) => <TextField {...params} label="Marca" />}
      sx={{ marginBottom: "16px", width: "100%" }}
      value={value}
    />
  );
};

export { AutocompleteBrand };
