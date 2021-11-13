import styled from "styled-components";
import * as React from "react";

export type TextContainerProps = {
  children?: React.ReactNode;
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "strong" | "span" | "a";
  href?: string;
  color?: "white" | "black" | "inherit";
  size?: "extra-large" | "large" | "medium" | "small";
  weight?: "bold" | "medium" | "regular";
  style?: object;
};

const sizeDictionary = {
  "extra-large": "32px",
  large: "24px",
  medium: "16px",
  small: "12px",
};

const weightDictionary = {
  bold: "bold",
  medium: "medium",
  regular: "400",
};

const Text = styled.div<TextContainerProps>`
  margin: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => sizeDictionary[props.size || "medium"]};
  font-weight: ${(props) => weightDictionary[props.weight || "regular"]};
`;

export { Text };
