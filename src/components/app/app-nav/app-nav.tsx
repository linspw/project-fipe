import type { NextComponentType } from "next";
import { Nav, NavWrapper } from "./style";
import { UIText } from "@components/ui/text";

const AppNav: NextComponentType = () => {
  return (
    <>
      <Nav>
        <NavWrapper>
          <UIText tag="a" color="white" href="/">
            Home
          </UIText>
        </NavWrapper>
      </Nav>
    </>
  );
};

export { AppNav };
