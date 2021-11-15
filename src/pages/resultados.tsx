import type { NextPage } from "next";
import { ResultPageContainer } from "@styles/pages/result-page-style";
import { ResultFIPECard } from "@modules/result-fipe-card";
import { GetServerSideProps } from "next";
import { getPriceByFilter } from "@services/get-price-by-filter";
import { UIText } from "@components/ui/text";

const ResultPage: NextPage<Props> = (props: Props) => {
  if (props.errorMessage)
    return (
      <ResultPageContainer>
        <UIText align="center">{props.errorMessage}</UIText>
      </ResultPageContainer>
    );

  return (
    <ResultPageContainer>
      <ResultFIPECard price={props.price} name={props.name} />
    </ResultPageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { model: modelId, brand: brandId, year: yearId } = context.query;
    const result = await getPriceByFilter({ brandId, modelId, yearId });
    const name = `Tabela Fipe: ${result.brand} ${result.model} ${result.year}`;
    const price = result.price;
    return { props: { price, name } };
  } catch (error: unknown) {
    const { message } = error as Error;
    return {
      props: { errorMessage: message || "Falha ao procurar o a veículo" },
    };
  }
};

type Props = {
  errorMessage?: string;
  price: string;
  name: string;
};

export default ResultPage;
