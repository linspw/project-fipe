import type { NextPage } from "next";
import { UIText } from "@components/ui/text";
import { HomePageContainer } from "@styles/pages/home-page-style";
import { SearchFIPECard } from "@modules/search-fipe-card";
import { GetStaticProps } from "next";
import { getAllBrands } from "@services/get-all-brands";
import { useAppDispatch } from "@stores/hooks";
import { setBrandList } from "@modules/search-fipe-card/fipe-form-slice";
import { useRouter } from "next/router";
import { SearchFilter } from "@app-types/search-types";
import queryString from "query-string";

const HomePage: NextPage<Props> = ({ brands }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  dispatch(setBrandList(brands));

  const handleSubmit = (filter: SearchFilter) => {
    router.push({
      pathname: "/resultados",
      query: queryString.stringify(filter),
    });
  };

  return (
    <HomePageContainer>
      <UIText
        tag="h1"
        weight="bold"
        size="extra-large"
        style={{ marginBottom: "8px" }}
        color="black"
      >
        Tabela Fipe
      </UIText>

      <UIText
        tag="h2"
        weight="bold"
        size="large"
        style={{ marginBottom: "16px" }}
        align="center"
        color="black"
      >
        Consulte o valor de um veículo de forma gratuita.
      </UIText>

      <SearchFIPECard onSubmit={handleSubmit} />
    </HomePageContainer>
  );
};

interface Props {
  brands: object[];
}

export const getServerSideProps: GetStaticProps = async () => {
  const { brands } = await getAllBrands();
  return { props: { brands } };
};

export default HomePage;
