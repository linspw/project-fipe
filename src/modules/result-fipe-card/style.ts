import styled from "styled-components";

const Card = styled.section`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
`;

const Label = styled.div`
  border-radius: 30px;
  padding: 8px 16px;
  background-color: #00a38c;
`;

export { Card, Label };
