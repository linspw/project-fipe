import type { NextPage } from "next";
import { UIText } from "@components/ui/text";
import { HomePageContainer } from "@styles/pages/home-page-style";

const Home: NextPage = () => {
  return (
    <HomePageContainer>
      <UIText
        tag="h1"
        weight="bold"
        size="extra-large"
        style={{ marginBottom: "16px" }}
      >
        Tabela Fipe
      </UIText>
      <UIText tag="h2" weight="bold">
        Consulte o valor de um veículo de forma gratuita.
      </UIText>
    </HomePageContainer>
  );
};

export default Home;
