import type { NextPage } from "next";
import { ResultPageContainer } from "@styles/pages/result-page-style";
import { ResultFIPECard } from "@modules/result-fipe-card";
import { GetServerSideProps } from "next";
import { getPriceByFilter } from "@services/get-price-by-filter";

const ResultPage: NextPage<Props> = ({ price, name }: Props) => {
  return (
    <ResultPageContainer>
      <ResultFIPECard price={price} name={name} />
    </ResultPageContainer>
  );
};

interface Props {
  price: string;
  name: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { model: modelId, brand: brandId, year: yearId } = context.query;
  const result = await getPriceByFilter({ brandId, modelId, yearId });
  const name = `Tabela Fipe: ${result.brand} ${result.model} ${result.year}`;
  const price = result.price;
  return { props: { price, name } };
};

export default ResultPage;
