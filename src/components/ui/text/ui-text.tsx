import { Text, TextContainerProps } from "./style";

const UIText = ({ children, tag, ...rest }: TextContainerProps) => {
  return (
    <Text as={tag} {...rest}>
      {children}
    </Text>
  );
};

export { UIText };
