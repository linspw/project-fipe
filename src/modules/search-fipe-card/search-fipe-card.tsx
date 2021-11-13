import type { NextComponentType } from "next";
import Button from "@material-ui/core/Button";
import { Card } from "./style";
import { AutocompleteBrand } from "./autocomplete-brand";
import { AutocompleteModelVehicle } from "./autocomplete-model-vehicle";
import { AutocompleteYear } from "./autocomplete-year";
import { selectCannotSearchFIPETable } from "./fipe-form-slice";
import { useAppSelector } from "@stores/hooks";

const SearchFIPECard: NextComponentType = () => {
  const cannotSearchFIPETable = useAppSelector(selectCannotSearchFIPETable);

  return (
    <Card>
      <AutocompleteBrand />

      <AutocompleteModelVehicle />

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
