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
  selectCannotSearchModel,
  selectModel,
  selectModelList,
  setModel,
  setModelList,
  setYear,
  setYearList,
} from "./fipe-form-slice";
import { getModelsByBrand } from "@/services/get-models-by-brand";

const AutocompleteModelVehicle: NextComponentType = () => {
  const cannotSearchModel = useAppSelector(selectCannotSearchModel);
  const value = useAppSelector(selectModel);
  const brand = useAppSelector(selectBrand);
  const options = useAppSelector(selectModelList);
  const dispatch = useAppDispatch();

  const handleSelectChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: FormField | null
  ) => {
    dispatch(setModel(newValue));
    dispatch(setYearList([]));
    dispatch(setYear(null));
  };

  useEffect(() => {
    if (!cannotSearchModel) {
      getModelsByBrand({ brandId: brand?.codigo }).then((result) => {
        dispatch(setModelList(result.models));
      });
    }
  }, [cannotSearchModel, brand, dispatch]);

  return (
    <Autocomplete
      disabled={cannotSearchModel}
      getOptionLabel={(option) => option.nome}
      loading={true}
      loadingText="Carregando"
      noOptionsText="Nenhuma opção encontrada!"
      onChange={handleSelectChange}
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Modelo" disabled={cannotSearchModel} />
      )}
      sx={{ marginBottom: "16px", width: "100%" }}
      value={value}
    />
  );
};

export { AutocompleteModelVehicle };
