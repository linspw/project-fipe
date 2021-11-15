import * as React from "react";
import Button from "@material-ui/core/Button";
import { Card } from "./style";
import { AutocompleteBrand } from "./autocomplete-brand";
import { AutocompleteModelVehicle } from "./autocomplete-model-vehicle";
import { AutocompleteYear } from "./autocomplete-year";
import { selectCannotSearchFIPETable } from "./fipe-form-slice";
import { useAppSelector } from "@stores/hooks";
import { selectFilterObject } from "./fipe-form-slice";
import { SearchFilter } from "../../types/search-types";

const SearchFIPECard: React.FC<Props> = ({ onSubmit }) => {
  const cannotSearchFIPETable = useAppSelector(selectCannotSearchFIPETable);
  const filter = useAppSelector(selectFilterObject);

  return (
    <Card>
      <AutocompleteBrand />

      <AutocompleteModelVehicle />

      <AutocompleteYear />

      <Button
        variant="contained"
        color="primary"
        disabled={cannotSearchFIPETable}
        onClick={() => onSubmit(filter)}
      >
        Consultar preço
      </Button>
    </Card>
  );
};

interface Props {
  onSubmit: (filter: SearchFilter) => void;
}

export { SearchFIPECard };
