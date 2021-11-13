import type { NextComponentType } from "next";
import { Footer, FooterWrapper } from "./style";
import { UIText } from "@components/ui/text";

const AppFooter: NextComponentType = () => {
  return (
    <Footer>
      <FooterWrapper>
        <UIText tag="strong" color="white">
          2021 - Feito por Jessé Correia Lins.
        </UIText>
      </FooterWrapper>
    </Footer>
  );
};

export { AppFooter };
