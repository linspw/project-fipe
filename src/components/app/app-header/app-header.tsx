import type { NextComponentType } from "next";
import { Header, HeaderLogoLink } from "./style";
import Image from "next/image";
import ProjectFipeLogo from "@assets/project-fipe-logo.svg";

const AppHeader: NextComponentType = () => {
  return (
    <Header>
      <HeaderLogoLink href="/">
        <Image src={ProjectFipeLogo} alt="Project FIPE logo." />
      </HeaderLogoLink>
    </Header>
  );
};

export { AppHeader };
