import * as React from "react";
import { UIText } from "@components/ui/text";
import { Card, Label } from "./style";

const ResultFIPECard: React.FC<Props> = ({ price, name }) => {
  return (
    <Card>
      <UIText
        tag="h1"
        weight="bold"
        size="extra-large"
        style={{ marginBottom: "16px" }}
        color="black"
        align="center"
      >
        {name}
      </UIText>

      <Label style={{ marginBottom: "16px" }}>
        <UIText weight="bold" size="large" color="white" align="center">
          {price}
        </UIText>
      </Label>

      <UIText
        tag="h2"
        weight="regular"
        size="small"
        style={{ marginBottom: "16px" }}
        align="center"
        color="grey"
      >
        Este é o preço de compra do veículo.
      </UIText>
    </Card>
  );
};

interface Props {
  price: string;
  name: string;
}

export { ResultFIPECard };
