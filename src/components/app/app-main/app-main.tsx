import type { NextComponentType } from "next";
import { Main } from "./style";

const AppMain: NextComponentType = ({ children }) => {
  return <Main>{children}</Main>;
};

export { AppMain };
