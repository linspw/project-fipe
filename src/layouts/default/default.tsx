import type { NextComponentType } from "next";
import { AppHeader } from "@components/app/app-header";
import { AppNav } from "@/components/app/app-nav";
import { AppFooter } from "@components/app/app-footer";
import { AppMain } from "@components/app/app-main";
import { AppContainer } from "./style";

const DefaultLayout: NextComponentType = ({ children }) => {
  return (
    <AppContainer>
      <AppHeader />

      <AppNav />

      <AppMain>{children}</AppMain>

      <AppFooter />
    </AppContainer>
  );
};

export { DefaultLayout };
