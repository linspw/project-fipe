import React from "react";
import type { FormField } from "@app-types/form-types";
import type { SyntheticEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import type { NextComponentType } from "next";
import { useAppSelector, useAppDispatch } from "@stores/hooks";
import { useEffect } from "react";
import {
  selectBrand,
  selectCannotSearchYear,
  selectModel,
  selectYear,
  selectYearList,
  setYear,
  setYearList,
} from "./fipe-form-slice";
import { getYearsByBrandAndModel } from "@/services/get-years-by-brand-and-model";

const AutocompleteYear: NextComponentType = () => {
  const cannotSearchYear = useAppSelector(selectCannotSearchYear);
  const options = useAppSelector(selectYearList);
  const value = useAppSelector(selectYear);
  const brand = useAppSelector(selectBrand);
  const model = useAppSelector(selectModel);
  const dispatch = useAppDispatch();

  const handleSelectChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: FormField | null
  ) => {
    dispatch(setYear(newValue));
  };

  useEffect(() => {
    if (!cannotSearchYear) {
      getYearsByBrandAndModel({
        brandId: brand?.codigo,
        modelId: model?.codigo,
      }).then((result) => {
        dispatch(setYearList(result.years));
      });
    }
  }, [cannotSearchYear, brand, model, dispatch]);

  if (cannotSearchYear) return null;

  return (
    <Autocomplete
      getOptionLabel={(option) => option.nome}
      loading={true}
      loadingText="Carregando"
      noOptionsText="Nenhuma opção encontrada!"
      onChange={handleSelectChange}
      options={options}
      renderInput={(params) => <TextField {...params} label="Ano" />}
      sx={{ marginBottom: "16px", width: "100%" }}
      value={value}
    />
  );
};

export { AutocompleteYear };
