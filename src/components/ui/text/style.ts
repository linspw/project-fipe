import styled from "styled-components";
import * as React from "react";

export type TextContainerProps = {
  children?: React.ReactNode;
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "strong" | "span" | "a";
  href?: string;
  color?: "white" | "black" | "grey" | "inherit";
  size?: "extra-large" | "large" | "medium" | "small";
  weight?: "bold" | "medium" | "regular";
  style?: object;
  align?: "center" | "left" | "right";
};

const colorDictionary = {
  grey: "#74787a",
  white: "#fff",
  black: "#424242",
  inherit: "inherit",
};

const sizeDictionary = {
  "extra-large": "34px",
  large: "24px",
  medium: "16px",
  small: "12px",
};

const weightDictionary = {
  bold: "700",
  medium: "500",
  regular: "400",
};

const Text = styled.div<TextContainerProps>`
  margin: 0;
  color: ${(props) => colorDictionary[props.color || "inherit"]};
  font-size: ${(props) => sizeDictionary[props.size || "medium"]};
  font-weight: ${(props) => weightDictionary[props.weight || "regular"]};
  text-align: ${(props) => props.align || "left"};
`;

export { Text };
