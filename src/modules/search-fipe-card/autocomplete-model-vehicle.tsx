import * as React from "react";
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

  useEffect(() => {
    if (!cannotSearchModel) {
      getModelsByBrand({ brandId: brand?.codigo }).then((result) => {
        dispatch(setModelList(result.models));
      });
    }
  }, [cannotSearchModel, brand, dispatch]);

  const handleSelectChange = (event: any, newValue: any) => {
    dispatch(setModel(newValue));
    dispatch(setYearList([]));
    dispatch(setYear(null));
  };

  return (
    <Autocomplete
      noOptionsText="Nenhuma opção encontrada!"
      value={value}
      onChange={handleSelectChange}
      options={options}
      sx={{ marginBottom: "16px", width: "100%" }}
      disabled={cannotSearchModel}
      getOptionLabel={(option) => option.nome}
      renderInput={(params) => (
        <TextField {...params} label="Modelo" disabled={cannotSearchModel} />
      )}
    />
  );
};

export { AutocompleteModelVehicle };
