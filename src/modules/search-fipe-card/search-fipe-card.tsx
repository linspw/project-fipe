import type { NextComponentType } from "next";
import { Card } from "./style";
import Button from "@material-ui/core/Button";
import { AutocompleteYear } from "./autocomplete-year";
import { AutocompleteBrand } from "./autocomplete-brand";
import { AutocompleteModelVehicle } from "./autocomplete-model-vehicle";

const SearchFIPECard: NextComponentType = () => {
  const cannotSearchFIPETable = false;
  return (
    <Card>
      <AutocompleteModelVehicle />

      <AutocompleteBrand />

      <AutocompleteYear />

      <Button
        variant="contained"
        color="primary"
        disabled={cannotSearchFIPETable}
      >
        Consultar preço
      </Button>
    </Card>
  );
};

export { SearchFIPECard };
