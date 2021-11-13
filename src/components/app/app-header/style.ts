import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const HeaderLogoLink = styled.a`
  height: 100%;
  max-height: 32px;
  width: 200px;
`;

export { Header, HeaderLogoLink };
