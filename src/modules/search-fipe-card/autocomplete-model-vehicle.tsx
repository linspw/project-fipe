import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import type { NextComponentType } from "next";

const options = ["Option 1", "Option 2"];

const AutocompleteModelVehicle: NextComponentType = () => {
  const [value, setValue] = React.useState(options[0]);

  const handleSelectChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Autocomplete
      value={value}
      onChange={handleSelectChange}
      id="controllable-states-demo"
      options={options}
      sx={{ marginBottom: "16px", width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Modelo" />}
    />
  );
};

export { AutocompleteModelVehicle };
